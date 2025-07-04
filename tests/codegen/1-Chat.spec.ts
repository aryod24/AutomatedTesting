import { test, expect } from '@playwright/test';
test('TC3_Chat Kirim Template', async ({ page }) => {
await page.goto('https://v3.maxchat.id/login?from=/');
await page.getByTitle('Email').click();
await page.getByTitle('Email').fill('supportmax@maxchat.id');

await page.getByTitle('Password').click();
await page.getByTitle('Password').fill('testing123');
await page.getByRole('button', { name: 'Login' }).click();
await page.getByText('Success login').click();
await page.getByText('Chat', { exact: true }).click();
await page.locator('div').filter({ hasText: /^Aryo$/ }).click();
await page.getByRole('button', { name: 'Send Template' }).click();
await page.locator('.q-mb-md > .q-field > .q-field__inner > .q-field__control > .q-field__control-container > .q-field__native').first().click();
await page.getByRole('listitem').filter({ hasText: 'tes_submit_template aaa' }).first().click();
await page.getByRole('button', { name: 'Send', exact: true }).click();
});