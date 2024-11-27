import { chromium } from "playwright";
import { config } from "dotenv";
import { IluccaPlanning } from "./ilucca-planning.mjs";
import { writeFileSync } from "fs";
config();

(async () => {
  const browser = await chromium.launch({
    headless: true,
  });
  const context = await browser.newContext({
    locale: "fr-FR",
  });
  const page = await context.newPage();
  await page.goto(
    `https://${process.env.ILUCCA_ORGANIZATION}.ilucca.net/identity/login`
  );
  await page.getByPlaceholder("Identifiant").fill(process.env.ILUCCA_LOGIN);
  await page.getByPlaceholder("Identifiant").press("Tab");
  await page.getByPlaceholder("Mot de passe").fill(process.env.ILUCCA_PASSWORD);
  await page.getByRole("button", { name: "Se connecter" }).click();

  const responsePromise = page.waitForResponse(`**/DemandePlanning.ashx**`);

  await page.getByRole("link", { name: "Timmi Absences" }).click();
  const response = await responsePromise;
  const responseJson = await response.json();
  const planning = new IluccaPlanning(responseJson.planning);
  // save to file
  writeFileSync(
    "./output/ilucca-planning.json",
    JSON.stringify(
      Object.fromEntries(planning.getMonthPresenceDaysMap()),
      null,
      2
    )
  );
  // ---------------------
  await context.close();
  await browser.close();
})();
