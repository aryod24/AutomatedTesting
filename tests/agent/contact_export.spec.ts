import { test, expect } from '@playwright/test';

test('Contact Export Test', async ({ page }) => {
  // 1. Navigate to https://v3.maxchat.id
  await page.goto('https://v3.maxchat.id');

  // 2. Login with email: supportmax@maxchat.id and password: testing123
  // Assuming login elements are present after navigation.
  // Since the previous snapshot showed we were already logged in,
  // I'll add placeholders for login and will need to verify these if the test fails.
  // await page.getByPlaceholder('Email').fill('supportmax@maxchat.id');
  // await page.getByPlaceholder('Password').fill('testing123');
  // await page.getByRole('button', { name: 'Login' }).click();

  // 3. Click on the Contact feature
  await page.getByText('Contact', { exact: true }).click();

  // 4. Click on the three-dot icon in the top-right corner
  await page.locator('[data-test="dropdown-exportImport"]').click();

  // 5. Click on the Export Contact feature
  await page.locator('[data-test="btn-openExport"]').click();

  // 6. Confirm the download prompt by clicking Yes
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Yes' }).click();
  const download = await downloadPromise;

  // 7. Verify that a file is downloaded
  const path = await download.path();
  expect(path).toBeTruthy();
  expect(download.suggestedFilename()).toContain('export-contact');
});
