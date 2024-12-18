const { chromium } = require('playwright');

// dotenv
require('dotenv').config();


(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto("https://subscribe.free.fr/login/");
  await page.fill('input[name="login"]', process.env.FREE_BOX_LOGIN);
  await page.fill('input[name="pass"]',  process.env.FREE_BOX_PASSWORD);
  await page.click('input[type="submit"]');
  const downloadPromise = page.waitForEvent("download");
  await page.click(
    "#widget_mesfactures > div.widget_content > div > ul > li:nth-child(1) > a"
  );
  const download = await downloadPromise;
  // @todo save to a specific folder
  await download.saveAs(
    "./output/" + download.suggestedFilename()
  );
  await page.close()
  await browser.close();
})();
