import { chromium } from "playwright";
import { config } from "dotenv";
import { IluccaPlanning } from "./ilucca-planning.mjs";
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

  const responsePromise = page.waitForResponse(
    `**/DemandePlanning.ashx**`)

  await page.getByRole("link", { name: "Timmi Absences" }).click();
  const response = await responsePromise;
  const responseJson = await response.json(); 
  const planning = new IluccaPlanning(responseJson.planning);
  console.log(`prensece days : ${planning.countPresenceDays()}`);

  // ---------------------
  await context.close();
  await browser.close();
})();
