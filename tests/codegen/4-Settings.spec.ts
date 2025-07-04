import { test, expect } from '@playwright/test';
test('TC6_Create agent Division', async ({ page }) => {
await page.goto('https://v3.maxchat.id');
await page.getByTitle('Email').click();
await page.getByTitle('Email').fill('supportmax@maxchat.id');

await page.getByTitle('Password').click();
await page.getByTitle('Password').fill('testing123');
await page.getByRole('button', { name: 'Login' }).click();
await page.getByRole('listitem').filter({ hasText: 'Setting' }).click();
await page.getByRole('button', { name: 'Expand "Agents"' }).click();
await page.getByRole('button', { name: 'Expand "Agent Division"' }).click();
await page.getByRole('button', { name: 'New Division' }).click();
await page.getByTitle('Division Name').click();
await page.getByTitle('Division Name').fill('divisi1');
await page.locator('#q-portal--dialog--1 div').filter({ hasText: /^Agents$/ }).locator('img').click();
await page.getByText('Supervisor 2').click();
await page.locator('#q-portal--menu--2').getByText('Test Agent').click();
await page.locator('#q-portal--dialog--1 img').nth(3).click();
await page.getByText('Save').click();
await page.getByRole('button', { name: 'Save' }).click();
await page.goto('https://v3.maxchat.id/setting?menu=agent-division&searchText=');
});

