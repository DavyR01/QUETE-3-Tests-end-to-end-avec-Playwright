import { test, expect } from '@playwright/test';

test("Able to calculate a simple operation", async ({ page }) => {
   await page.goto("https://www.desmos.com/scientific?lang=fr");
   // await page.pause()
});

test('get button number 2', async ({ page }) => {
   await page.goto("https://www.desmos.com/scientific?lang=fr");

   await page.getByRole('button', {name: '2'}).click();
})