import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
   await page.goto("https://www.desmos.com/scientific?lang=fr");
});

test('get simple addition 2 + 2 by clicking keys with the mouse', async ({ page }) => {
   // await page.goto("https://www.desmos.com/scientific?lang=fr");
   await page.pause()

   await page.getByLabel('2').click();
   await page.getByLabel('Plus').click();
   await page.getByLabel('2').click();
   await page.getByLabel('Entrée', { exact: true }).click();

   await expect(page.getByText('4', { exact: true }).nth(1)).toHaveText('4');
})

test('get simple addition 5 + 6 by pressing or typing on the keyboard', async ({ page }) => {
   // await page.goto("https://www.desmos.com/scientific?lang=fr");

   const labelExpression = page.getByLabel('Expression 1:')

   await page.getByLabel('Liste d\'expressions').locator('span').nth(2).click();

   await labelExpression.press('5');
   await labelExpression.press('+');
   await labelExpression.press('6');

   await expect(page.getByText('equals 11=')).toHaveText('equals 11=11');
})