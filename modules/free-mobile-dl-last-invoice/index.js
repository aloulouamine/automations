const { chromium } = require('playwright');
const { existsSync, mkdirSync } = require('fs');
const { exec } = require('child_process');
require('dotenv').config();

const REMOTE_SSH_CMD = 'ssh -o BatchMode=yes -o ConnectTimeout=10 root@77.237.241.132 "tail -n 1 sms.txt"';

function getRemoteLastSMS() {
  return new Promise((resolve, reject) => {
    exec(REMOTE_SSH_CMD, (error, stdout, stderr) => {
      if (error) {
        console.warn(`SSH Warning: ${error.message}`);
        // resolve null to keep trying, or reject if critical
        resolve(null);
        return;
      }
      resolve(stdout.trim());
    });
  });
}

function extractCode(text) {
  if (!text) return null;
  // Match 6 digits
  const match = text.match(/\b\d{6}\b/);
  return match ? match[0] : null;
}

function delay(time) {
  return new Promise(function(resolve) { 
      setTimeout(resolve, time)
  });
}

(async () => {
  const browser = await chromium.launch({
    headless: false // Keep distinct to see if OTP is requested
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  
  try {
    // Get initial state of SMS file to avoid using old codes
    console.log('Checking initial SMS state...');
    const initialSMS = await getRemoteLastSMS();
    console.log('Initial SMS:', initialSMS);

    console.log('Navigating to login page...');
    await page.goto('https://mobile.free.fr/account/v2/login');

    console.log('Filling credentials...');
    await page.getByPlaceholder('Identifiant (8 chiffres)').fill(process.env.FREE_MOBILE_LOGIN);
    await page.getByPlaceholder('Mot de passe').fill(process.env.FREE_MOBILE_PASSWORD);
    
    await page.getByRole('button', { name: 'Se connecter' }).click();

    // Check for 2FA or successful login
    try {
        await page.waitForURL('**/account/v2/home', { timeout: 5000 });
        console.log('Login successful (no immediate OTP).');
    } catch (e) {
        console.log('Did not reach home page immediately. Checking for OTP...');
        
        // Check if OTP input is visible
        // We'll give it a bit of time to appear
        const otpInput = page.locator('input').first(); // The simplified selector from before
        try {
            await otpInput.waitFor({ state: 'visible', timeout: 5000 });
            console.log('OTP requested. Starting watcher...');

            let code = null;
            let attempts = 0;
            const maxAttempts = 30; // 30 * 2s = 60s timeout

            while (attempts < maxAttempts) {
                attempts++;
                console.log(`Polling SSH for OTP (Attempt ${attempts}/${maxAttempts})...`);
                const currentSMS = await getRemoteLastSMS();
                
                if (currentSMS && currentSMS !== initialSMS) {
                    const extracted = extractCode(currentSMS);
                    if (extracted) {
                        console.log(`Found new code: ${extracted}`);
                        code = extracted;
                        break;
                    }
                }
                
                await delay(2000);
            }

            if (code) {
                // Determine how to input the code. 
                // Previous scrip used: page.locator('input').first().fill('2'); ... for each digit
                // But usually you can fill the first one and it might auto-advance or just fill the whole thing if it's a single field.
                // The previous script filled them one by one. Let's try filling the string first, if that fails, we split.
                // Looking at the previous script, it had:
                // await page.locator('input').first().fill('2');
                // await page.locator('input:nth-child(2)').fill('1');
                // This implies multiple inputs.
                
                const inputs = await page.locator('.did-input').all(); // Guessing class, or just input
                // Actually, let's stick to the previous selector logic but dynamic
                // We'll assume the inputs are siblings.
                
                const codeDigits = code.split('');
                for (let i = 0; i < codeDigits.length; i++) {
                    // Start from nth-child(1) or just inputs list
                    // The previous script used 'input' first() then nth-child(2)...
                    // Let's use a robust way:
                     if (i === 0) {
                        await page.locator('input').first().fill(codeDigits[i]);
                     } else {
                        // nth-child is 1-based. So 2nd digit is nth-child(2) IF they are all siblings.
                        // But previous script had `locator('input').first()` then `locator('input:nth-child(2)')`.
                        // This implies the first input is the FIRST child of its parent? Or just the first one found.
                        // Let's try to get all inputs in the container.
                        // A safe bet is usually to type it if focused, or fill them one by one.
                        
                        // We will blindly attempt the nth-child selector from the old script
                        // If it fails, we fail.
                        await page.locator(`input:nth-child(${i + 1})`).fill(codeDigits[i]);
                     }
                }
                
                await page.getByRole('button', { name: 'Valider' }).click();
                
                // Wait for home
                await page.waitForURL('**/account/v2/home', { timeout: 60000 });
                console.log('Login successful after OTP.');

            } else {
                console.error('Timeout waiting for OTP from SSH.');
                // Don't exit, might have logged in anyway? Unlikely.
            }

        } catch (otpError) {
             console.log('OTP input not found or handling failed:', otpError);
        }
    }

    console.log('Navigating to invoices...');
    await page.getByRole('tab', { name: 'Mes factures' }).click();
    
    const downloadPromise = page.waitForEvent('download');
    
    console.log('Clicking download...');
    await page.getByRole('link', { name: /T.l.charger ma facture/i }).click();
    
    const download = await downloadPromise;
    
    const outputDir = './output';
    if (!existsSync(outputDir)) {
      mkdirSync(outputDir);
    }
    
    const savePath = outputDir + '/free_mobile_invoice.pdf';
    console.log(`Saving invoice to ${savePath}...`);
    await download.saveAs(savePath);
    console.log('Download complete.');

  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    await context.close();
    await browser.close();
  }
})();