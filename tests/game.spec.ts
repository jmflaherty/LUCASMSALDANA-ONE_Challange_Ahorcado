import { test, expect } from "@playwright/test";

let palabras = ["verdugo", "caballero", "espada", "laud", "cruzada"];

test("Play new game", async ({ page }) => {
  const newGameButton = page.locator(".btn-iniciarjuego");
  const inGameNewGameButton = page.locator("#btn-nuevojuego");
  const loseAlert = page.locator("#alerta-muere");
  const winAlert = page.locator("#alerta-vive");

  await page.goto("/");

  await newGameButton.click();

  for (let word of palabras) {
    for (let character of word.split("")) {
      await page.keyboard.press(character);
      if (await loseAlert.isVisible()) {
        await inGameNewGameButton.click();
        break;
      }
    }
    if (await winAlert.isVisible()) {
      break;
    }
  }
  await expect(winAlert).toBeVisible();
});
