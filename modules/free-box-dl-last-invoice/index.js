const { chromium } = require('playwright');
const { existsSync, mkdirSync } = require('fs');

// dotenv
require('dotenv').config();


(async () => {
  const browser = await chromium.launch(
    {
      headless: true,
    }
  );
  const page = await browser.newPage();
  await page.goto("https://subscribe.free.fr/login/");
  await page.fill('input[name="login"]', process.env.FREE_BOX_LOGIN);
  await page.fill('input[name="pass"]',  process.env.FREE_BOX_PASSWORD);
  await page.getByLabel('Identifiant').click();
  const downloadPromise = page.waitForEvent("download");
  await page.click(
    "#widget_mesfactures > div.widget_content > div > ul > li:nth-child(1) > a"
  );
  const download = await downloadPromise;

  // Ensure the output directory exists
  const outputDir = './output';
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir);
  }  
  
  // @todo save to a specific folder
  await download.saveAs(
    "./output/invoice.pdf"
  );
  await page.close()
  await browser.close();
})();
