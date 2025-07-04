const { test, expect } = require('@playwright/test');

test('TC1_Login', async ({ page }) => {
  await page.goto('https://v3.maxchat.id/login?from=/');
  await page.getByTitle('Email').fill('supportmax@maxchat.id');
  await page.getByTitle('Password').fill('testing123');
  await page.click('.tw-capitalize');

  // Assertion: Pastikan toast login muncul
  const toast = await page.locator('[role="alert"]').first();
  await expect(toast).toContainText('Login berhasil');
});

test('TC2_Download Report', async ({ page, context }) => {
  await page.goto('https://v3.maxchat.id/login?from=/');
  await page.getByTitle('Email').fill('supportmax@maxchat.id');
  await page.getByTitle('Password').fill('testing123');
  await page.click('.tw-capitalize');

  // Tunggu sampai halaman utama dimuat
  await page.waitForLoadState('networkidle');

  // Tangkap event download
  const [ download ] = await Promise.all([
    page.waitForEvent('download'),
    page.locator('div').filter({ hasText: /^Download Report$/ }).click(),
  ]);

  // Simpan file dan pastikan terdownload
  const path = await download.path();
  expect(path).not.toBeNull();
});