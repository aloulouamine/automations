import { chromium } from "playwright";
import { config } from "dotenv";
import { readFileSync } from "fs";
import { formatDateToTiimeCalendarLabel } from "./utils.mjs";
config();

(async () => {
  const browser = await chromium.launch({
    headless: false,
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://apps.tiime.fr/signin");
  await page.getByPlaceholder("Adresse mail").click();
  await page.getByPlaceholder("Adresse mail").fill(process.env.TIIME_LOGIN);
  await page.getByPlaceholder("Mot de passe").click();
  await page.getByPlaceholder("Mot de passe").fill(process.env.TIIME_PASSWORD);
  await page.getByPlaceholder("Mot de passe").press("Enter");
  await page.getByRole("button", { name: "Je me connecte" }).click();
  await page.getByText("Dépenses").click();
  await page.getByRole("link", { name: "Frais kilométriques" }).click();
  await page.getByRole("button", { name: "Ajouter un trajet" }).click();
  await page.getByPlaceholder("Adresse", { exact: true }).click();
  await page.getByText("Trajet du : 27/11/2024 Propri").click();
  await page.getByPlaceholder("Nom de l'entreprise (").click();
  await page.getByText("Valiuz").click();
  await page.getByLabel("Aller / Retour").check();
  await page.locator("tiime-chip path").click();
  await page.locator("mat-chip-set div").first().click();
  // read planning file
  const planning = JSON.parse(readFileSync("./output/ilucca-planning.json"));
  // iterate over days
  for (const [day, presence] of Object.entries(planning)) {
    if (presence === 0) {
      continue;
    }
    await page.getByLabel(formatDateToTiimeCalendarLabel(day), { exact: true }).click();
  }
  await page.getByRole("button", { name: "Valider" }).click();
  await page.getByRole("button", { name: "Enregistrer" }).click();
  await page
    .locator("app-mileage-allowances-actions")
    .getByRole("button")
    .click();
  await page.locator(".cdk-overlay-backdrop").click();
  await page.getByText("Actions", { exact: true }).click();

  // ---------------------
  await context.close();
  await browser.close();
})();



