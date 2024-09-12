// tests/ui/addemployee.spec.js

import { test } from '../../fixtures/fixtures';
import { expect } from '@playwright/test';

test.beforeAll(async ({}) => {
      
});

test('UI - Add a new employee',{tag:'@uitests'}, async ({ page, loginPage, dashboardPage, employeePage, credentials, newEmployee }) => {
  test.setTimeout(60000);
  await loginPage.gotoLoginPage();
  //await loginPage.login(credentials.username, credentials.password); -- No need to login again as using state auth file
  await dashboardPage.navigateToPIM();
  await employeePage.addEmployee(newEmployee.firstName, newEmployee.lastName);
  await page.waitForTimeout(3000);
  await expect(page.locator("(//h6[normalize-space()='Personal Details'])[1]")).toBeVisible();
});

test.afterAll(async () => {
  console.log('Add Employee Test executed');
 });
