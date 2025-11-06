import { test, expect } from '@playwright/test';

test('Open website', async ({ page }) => {

  await page.goto('https://www.directionsforpartners.com/emea2025');
  await page.getByRole('button', { name: 'Accept All' }).click();
  await page.getByRole('link', { name: 'Speakers' }).click();
  await page.getByRole('link', { name: 'Schedule' }).click();
  await page.getByRole('link', { name: 'Session List' }).click();
  await page.getByRole('link', { name: 'Keynote Day 1' }).click();
  await page.getByRole('link', { name: 'Directions for Partners', exact: true }).click();

});



test('Check Aria Snapshot', async ({ page }) => {

  await page.goto('https://www.directionsforpartners.com/emea2025');
  await page.getByRole('button', { name: 'Accept All' }).click();

  await expect(page.locator('#content')).toMatchAriaSnapshot(`
    - navigation:
      - list:
        - listitem:
          - link "Intro":
            - /url: /emea2025
        - listitem:
          - link "Speakers":
            - /url: /conferences-and-events/directions/emea2025/speakers
        - listitem:
          - link "Schedule":
            - /url: /conferences-and-events/directions/emea2025/schedule
        - listitem:
          - link "Session List":
            - /url: /conferences-and-events/directions/emea2025/session-list
        - listitem:
          - link "Sponsors":
            - /url: /conferences-and-events/directions/emea2025/sponsors
        - listitem:
          - link "Practical information":
            - /url: /emea2025/practical-information
        - listitem:
          - link "BCCommunityLUV":
            - /url: /emea2025/practical-information-2
    `);
    

});