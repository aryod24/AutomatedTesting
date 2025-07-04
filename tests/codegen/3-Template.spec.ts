import { test, expect } from '@playwright/test';
test('TC5_Buat Template', async ({ page }) => {
await page.goto('https://v3.maxchat.id');
await page.getByTitle('Email').click();
await page.getByTitle('Email').fill('supportmax@maxchat.id');
await page.getByTitle('Password').click();
await page.getByTitle('Password').fill('testing123');
await page.getByRole('button', { name: 'Login' }).click();
await page.getByText('Broadcast', { exact: true }).click();
await page.getByRole('button', { name: 'Template message' }).click();
await page.getByRole('button', { name: 'New Template' }).click();
await page.getByRole('textbox', { name: '/ 60' }).click();
await page.getByRole('textbox', { name: '/ 60' }).fill('matahari_bersinar00');
await page.getByRole('textbox', { name: '/ 1024' }).click();
await page.getByRole('textbox', { name: '/ 1024' }).fill('test tempalte saja (no publish)');
await page.getByRole('button', { name: 'Send Template' }).click();
await page.getByRole('cell', { name: 'matahari_bersinar' }).getByRole('strong').click();
});