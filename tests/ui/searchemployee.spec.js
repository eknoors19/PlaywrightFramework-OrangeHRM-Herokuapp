// tests/ui/searchemployee.spec.js

import {test} from '../../fixtures/fixtures';
import { expect } from '@playwright/test';

const testData = require('../../data/webTestData.json');

test.beforeAll(async ({}) => {
      
});

test('UI - Search for an employee',{tag:'@uitests'}, async ({ page, loginPage, dashboardPage, employeePage, credentials, newEmployee }) => {
  test.setTimeout(60000);
  await loginPage.gotoLoginPage();
  //await loginPage.login(credentials.username, credentials.password); -- No need to login again as using state auth file
  await dashboardPage.navigateToPIM();
  await employeePage.searchEmployee(testData.newEmployee.searchusername);
  await expect(employeePage.employeeList).toHaveCount(1);
});

test.afterAll(async () => {
  console.log('Search Employee Test executed');
 });
