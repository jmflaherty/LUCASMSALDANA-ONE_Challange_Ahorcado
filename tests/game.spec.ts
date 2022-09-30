import step, { test, expect } from "@playwright/test";

let palabras = ["verdugo", "caballero", "espada", "laud", "cruzada"];
test("Play new game", async ({ page }) => {
  const newGameButton = page.locator(".btn-iniciarjuego");
  const inGameNewGameButton = page.locator("#btn-nuevojuego");
  const loseAlert = page.locator("#alerta-muere");
  const winAlert = page.locator("#alerta-vive");

  await page.goto("/");
  await newGameButton.click();

  await test.step("Guesses", async () => {
    let attempt = 0;
    do {
      const word = palabras[Math.floor(Math.random() * palabras.length)];
      await test.step(`#${attempt} - Guessing with ${word}`, async () => {
        for (let character of word.split("")) {
          await page.keyboard.press(character);
          if (await loseAlert.isVisible()) {
            await inGameNewGameButton.click();
            break;
          }
        }
      });
      ++attempt
    } while (await winAlert.isHidden());
  });

  await expect(winAlert).toBeVisible();
});
