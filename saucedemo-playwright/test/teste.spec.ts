import { test, expect } from '@playwright/test';
import { SaucePage } from './pages/SaucePage';
import { users } from './user/user'; 

test.describe('SauceDemo Suite', () => {
  for (const user of users) {
    test(`Login - ${user.username}`, async ({ page }) => {
      const sauce = new SaucePage(page);

      await sauce.navigate();
      await sauce.login(user.username, user.password);

      if (user.success) {
        await expect(page).toHaveURL(/inventory/);
        await expect(sauce.inventoryList).toBeVisible();
      } else {
        await expect(sauce.errorMessage).toContainText('locked out');
      }
    });
  }

  test('Fluxo de compra completo', async ({ page }) => {
    const sauce = new SaucePage(page);

    await sauce.navigate();
    await sauce.login('standard_user', 'secret_sauce');

    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="checkout"]').click();

    await page.locator('[data-test="firstName"]').fill('teste exemplo');
    await page.locator('[data-test="lastName"]').fill('teste exemplo');
    await page.locator('[data-test="postalCode"]').fill('45980-0000');

    await page.locator('[data-test="continue"]').click();
    await page.locator('[data-test="finish"]').click();

    await expect(page.locator('[data-test="complete-header"]')).toHaveText(
      'Thank you for your order!'
    );
  });
});