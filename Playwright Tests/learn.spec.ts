import { test, expect } from '@playwright/test';

test('Microsoft Learn', async ({ page }) => {

  await page.goto('https://learn.microsoft.com/en-us/');

  await page.locator('[data-test-id="site-header-panel-controller-1"]').click();
  
  await page.getByRole('link', { name: 'Power Platform documentation' }).click();
  await page.getByRole('link', { name: 'Power Apps documentation' }).click();
  await page.getByRole('link', { name: 'Register now' }).click();
  
});


test('Microsoft Learn - Search Ignite', async ({ page }) => {

  await page.goto('https://learn.microsoft.com/en-us/');

  await page.locator('[data-test-id="welcome-page-search-form-autocomplete-input"]').click();
  await page.locator('[data-test-id="welcome-page-search-form-autocomplete-input"]').fill('ignite');
  await page.getByRole('button', { name: 'Search', exact: true }).click();

  await page.getByRole('heading', { name: 'Microsoft Ignite and' }).getByRole('link').click();  

});