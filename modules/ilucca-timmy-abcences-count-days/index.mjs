import { chromium } from "playwright";
import { config } from "dotenv";
config();

(async () => {
  const browser = await chromium.launch({
    headless: false,
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(
    `https://${process.env.ILUCCA_ORGANIZATION}.ilucca.net/identity/login`
  );
  await page.getByPlaceholder("Identifiant").fill(process.env.ILUCCA_LOGIN);
  await page.getByPlaceholder("Identifiant").press("Tab");
  await page.getByPlaceholder("Mot de passe").fill(process.env.ILUCCA_PASSWORD);
  await page.getByRole("button", { name: "Se connecter" }).click();
  // listen to xhr call
  page.on("response", async (response) => {
    if (
      response.url.includes(
        `https://${process.env.ILUCCA_ORGANIZATION}.ilucca.net/areas/figgo/DemandePlanning.ashx?`
      )
    ) {
      console.log(await (await response.body()).toJSON());
    }
  });

  await page.getByRole("link", { name: "Timmi Absences" }).click();

  await page.waitForTimeout(5000);
  const month = await page.$(
    "#div_demande_planning > table > tbody > tr:nth-child(2)"
  );

  console.log(month);

  // ---------------------
  await context.close();
  await browser.close();
})();
