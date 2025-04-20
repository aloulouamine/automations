const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://mobile.free.fr/account/v2/login');
  await page.getByPlaceholder('Identifiant (8 chiffres)').click();
  await page.getByPlaceholder('Identifiant (8 chiffres)').fill('50184343');
  await page.getByPlaceholder('Mot de passe').click();
  await page.getByPlaceholder('Mot de passe').fill('SeW%87uR"#:m?d/');
  await page.getByRole('button', { name: 'Se connecter' }).click();
  await page.locator('input').first().click();
  await page.locator('input').first().fill('2');
  await page.locator('input:nth-child(2)').fill('1');
  await page.locator('input:nth-child(3)').fill('5');
  await page.locator('input:nth-child(4)').fill('8');
  await page.locator('input:nth-child(5)').fill('0');
  await page.locator('input:nth-child(6)').fill('6');
  await page.getByRole('button', { name: 'Valider' }).click();
  await page.getByRole('tab', { name: 'Mes factures' }).click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('link', { name: ' Télécharger ma facture (.' }).click();
  const download = await downloadPromise;

  // ---------------------
  await context.close();
  await browser.close();
})();