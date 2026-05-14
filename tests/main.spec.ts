import { test, expect } from '@playwright/test';
import { MainPage } from './pages/MainPage';

test.describe('Portfolio site tests', () => {

  test('Сайт відкривається і має заголовок', async ({ page }) => {
    const main = new MainPage(page);

    await main.goto();

    await expect(main.title).toBeVisible();
  });

  test('Є навігаційні кнопки', async ({ page }) => {
    const main = new MainPage(page);

    await main.goto();

    await expect(main.navLinks).toHaveCount(2);
  });

  test('Переходить на сторінку контактів', async ({ page }) => {
    const main = new MainPage(page);

    await main.goto();
    await main.goToContacts();

    await expect(page).toHaveURL(/contacts/);
  });

});