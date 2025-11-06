import { test, expect } from '@playwright/test';


test.beforeEach(async ({ page }) => {

  // Login 
    await page.goto('https://login.microsoftonline.com/');

  // Username
    await page.getByRole('textbox', { name: 'Enter your email, phone, or' }).click();
    await page.getByRole('textbox', { name: 'Enter your email, phone, or' }).fill('[username]');

  // Password
    await page.getByRole('button', { name: 'Next' }).click();
    await page.locator('#i0118').fill('[Password]');

  // Stay signed in
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('button', { name: 'Yes' }).click();

});

test('Open Canvas App', async ({ page }) => {

    await page.goto('[URL to your Canvas App]');

});

test('Navigate Canvas App', async ({ page }) => {

    await page.goto('[URL to your Canvas App]');

    await page.locator('iframe[name="fullscreen-app-host"]').contentFrame().getByTitle('Toggle Navigation').nth(1).click();
    await page.locator('iframe[name="fullscreen-app-host"]').contentFrame().getByRole('button', { name: 'Overview', exact: true }).click();
    await page.locator('iframe[name="fullscreen-app-host"]').contentFrame().getByRole('button', { name: 'Time Registration', exact: true }).click();
    await page.locator('iframe[name="fullscreen-app-host"]').contentFrame().locator('.appmagic-content-control-name > .appmagic-borderfill-container > .appmagic-border-inner > .react-knockout-control > .appmagic-image > .appmagic-image-pseudo-button').first().click();
    await page.locator('iframe[name="fullscreen-app-host"]').contentFrame().getByRole('button', { name: 'Settings' }).click();
    await page.locator('iframe[name="fullscreen-app-host"]').contentFrame().getByRole('tab', { name: 'Trace', exact: true }).click();
    await page.locator('iframe[name="fullscreen-app-host"]').contentFrame().getByRole('button', { name: 'Try it out!' }).click();

});


test('Canvas App Assertion', async ({ page }) => {

    await page.goto('[URL to your Canvas App]');

    await page.locator('iframe[name="fullscreen-app-host"]').contentFrame().getByRole('button', { name: 'Time Registration', exact: true }).click();
    await page.locator('iframe[name="fullscreen-app-host"]').contentFrame().getByRole('button', { name: 'New Item' }).click();
    await page.locator('iframe[name="fullscreen-app-host"]').contentFrame().getByRole('spinbutton', { name: 'Hours' }).click();

    await expect(page.locator('iframe[name="fullscreen-app-host"]').contentFrame().getByRole('spinbutton', { name: 'Hours' })).toHaveValue("3");

});



test('Canvas App Aria Snapshot', async ({ page }) => {

    await page.goto('[URL to your Canvas App]');
    
    await expect(page.locator('iframe[name="fullscreen-app-host"]').contentFrame().locator('#publishedCanvas')).toMatchAriaSnapshot(`
          - text: /Timesheets \\d+ Expenses € \\d+,\\d+ Leave \\d+ Help/
          - button "Documentation"
          - button "Ask your questions"
          `);

});


test('New Entry with screenshot', async ({ page }) => {

    await page.goto('[URL to your Canvas App]');
    
    await page.locator('iframe[name="fullscreen-app-host"]').contentFrame().getByRole('button', { name: 'Time Registration', exact: true }).click();
    await page.locator('iframe[name="fullscreen-app-host"]').contentFrame().getByRole('button', { name: 'New Item' }).click();
    await page.locator('iframe[name="fullscreen-app-host"]').contentFrame().getByRole('combobox', { name: 'Select a date' }).click();
    await page.locator('iframe[name="fullscreen-app-host"]').contentFrame().getByRole('button', { name: '6, November, 2025', exact: true }).click();
    await page.locator('iframe[name="fullscreen-app-host"]').contentFrame().getByRole('spinbutton', { name: 'Hours' }).dblclick();
    await page.locator('iframe[name="fullscreen-app-host"]').contentFrame().getByRole('spinbutton', { name: 'Hours' }).fill('8');
    await page.locator('iframe[name="fullscreen-app-host"]').contentFrame().getByRole('spinbutton', { name: 'Hours' }).press('Tab');
    await page.locator('iframe[name="fullscreen-app-host"]').contentFrame().getByRole('textbox', { name: 'Amoount of worked hours' }).fill('Test with playwright');
    await page.locator('iframe[name="fullscreen-app-host"]').contentFrame().getByRole('combobox', { name: 'Project' }).click();
    await page.locator('iframe[name="fullscreen-app-host"]').contentFrame().getByRole('option', { name: 'App Development' }).click();
    await page.locator('iframe[name="fullscreen-app-host"]').contentFrame().getByRole('textbox', { name: 'Description' }).click();
    await page.locator('iframe[name="fullscreen-app-host"]').contentFrame().getByRole('textbox', { name: 'Description' }).fill('This is a playwright test');
    await page.locator('iframe[name="fullscreen-app-host"]').contentFrame().getByRole('button', { name: 'Save' }).click();

    await page.screenshot({ path: 'screenshot.png' });

});