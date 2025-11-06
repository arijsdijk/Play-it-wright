import { test, expect } from '@playwright/test';


test.beforeEach(async ({ page }) => {

  // Login 
    await page.goto('https://login.microsoftonline.com/');

  // Username
    await page.getByRole('textbox', { name: 'Enter your email, phone, or' }).click();
    await page.getByRole('textbox', { name: 'Enter your email, phone, or' }).fill('[username]');

  // Password
    await page.getByRole('button', { name: 'Next' }).click();
    await page.locator('#i0118').fill('[password]');

  // Stay signed in
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('button', { name: 'Yes' }).click();

});

test('Open - Model driven app', async ({ page }) => {

    await page.goto('[URL to your Canvas App]');

});

test('Navigate - Model driven app', async ({ page }) => {

    await page.goto('https://org101cb536.crm4.dynamics.com/main.aspx?appid=15b56f1d-6265-f011-bec2-6045bde0527e&pagetype=custom&name=rsdk_personaldashboard_06315');

    await page.getByText('Time Registrations').click();
    await page.getByText('Projects', { exact: true }).click();
    await page.getByText('Fluent UI Custom Page Template').click();
    await page.getByText('Dashboard').click();

});

test('New entry - Model driven app', async ({ page }) => {

    await page.goto('[URL to your Canvas App]');

    await page.getByRole('menuitem', { name: 'New', exact: true }).click();
    await page.getByRole('textbox', { name: 'Name' }).click();
    await page.getByRole('textbox', { name: 'Name' }).fill('CollabDays Portugal');
    await page.getByRole('textbox', { name: 'Description' }).click();
    await page.getByRole('combobox', { name: 'Account, Lookup' }).click();
    await page.getByRole('combobox', { name: 'Account, Lookup' }).press('Enter');
    await page.getByText('CollabDays').click();
    await page.getByRole('menuitem', { name: 'Save & Close' }).click();

});

