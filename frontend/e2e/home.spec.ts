import { test, expect } from '@playwright/test';

test('Banner dan gallery tampil', async ({ page }) => {
  await page.goto('http://localhost:4200');

  // testid statis
  await expect(page.getByTestId('banner-title')).toHaveText(/Project Trolley/i);
  await expect(page.getByTestId('banner-desc')).toBeVisible();

  // testid dinamis
  await expect(page.getByTestId('gallery-image-0')).toBeVisible();
  await page.getByTestId('open-btn-0').click();
});
