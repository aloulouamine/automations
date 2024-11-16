const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: true
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://file-examples.com/');
  await page.getByLabel('Do not consent').click();
  await page.locator('#menu-item-27').getByRole('link', { name: 'Sample documents' }).click();
  await page.getByRole('row', { name: 'PDF Portable Document Format' }).getByRole('link').click();
  await page.getByRole('row', { name: '150 kB pdf Download sample' }).getByRole('link').click();
  const title = await page.title();
  console.log('Title: ', title)

  // ---------------------
  await context.close();
  await browser.close();
})();