const { chromium } = require("playwright");

require('dotenv').config();

(async () => {
  const browser = await chromium.launch({
    headless: true,
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://client.eseis-syndic.com/connexion");
  await page.getByLabel("Mon email").fill(process.env.SERGIC_ESEIS_LOGIN);
  await page.getByRole("button", { name: "Se connecter" }).click();
  await page.getByLabel("Mot de passe").fill(process.env.SERGIC_ESEIS_PASSWORD);
  await page.getByRole("button", { name: "Se connecter" }).click();
  await page.getByRole("link", { name: "Mes documents" }).click();
  await page.getByRole("link", { name: "Documents de Charges" }).click();
  const page1Promise = page.waitForEvent("popup");
  const downloadPromise = page.waitForEvent("download");
  await page
    .getByRole("link", { name: /Documents de Charges \d{2}\/10\/24/ })
    .click();
  const page1 = await page1Promise;
  const download = await downloadPromise;
  await download.saveAs("./output/" + download.suggestedFilename());

  await page1.close();
  // ---------------------
  await context.close();
  await browser.close();
})();


getPreviousMonth = () => {
    const now = new Date();
    const previousMonth = new Date(now);
    previousMonth.setMonth(now.getMonth() - 1);
    return previousMonth.getMonth();
}
