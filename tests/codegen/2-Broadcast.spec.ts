import { test, expect } from '@playwright/test';

test('TC4_Chat Kirim Template', async ({ page }) => {
  await page.goto('https://v3.maxchat.id');
  await page.getByTitle('Email').click();
  await page.getByTitle('Email').fill('supportmax@maxchat.id');

  await page.getByTitle('Password').click();
  await page.getByTitle('Password').fill('testing123');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByRole('listitem').filter({ hasText: 'Broadcast' }).click();
  await page.getByRole('button', { name: 'New Broadcast' }).click();
  await page.getByTitle('Broadcast Title').click();
  await page.getByTitle('Broadcast Title').fill('testbro194');
  await page.locator('div').filter({ hasText: /^Channel$/ }).locator('div').nth(3).click();
  await page.getByRole('option', { name: 'WhatsApp' }).locator('div').nth(2).click();
  await page.locator('label').filter({ hasText: 'Loading...' }).locator('img').click();
  await page.locator('[data-test="dropdown-templateName"]').click();
  await page.getByText('hello_maxchat1').click();
  await page.locator('[data-test="btn-nextStep1"]').click();
  await page.getByRole('button', { name: 'Edit' }).click();
  await page.locator('[data-test="form-phoneNumbers"]').click();
  await page.locator('[data-test="form-phoneNumbers"]').press('ArrowDown');
  await page.locator('[data-test="form-phoneNumbers"]').fill('phone\n082142226943');
  await page.locator('[data-test="btn-nextStep2"]').click();
  await page.locator('[data-test="btn-nextStep3"]').click();
  await page.getByRole('button', { name: 'Yes' }).click();
});