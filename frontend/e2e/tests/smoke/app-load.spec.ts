import { test, expect } from '@playwright/test';

test.describe('Smoke Tests', () => {
  test('should load application', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Kaiwa/);
  });

  test('should show navbar', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('app-navbar')).toBeVisible();
  });
});