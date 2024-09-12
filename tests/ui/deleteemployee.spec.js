// tests/ui/deleteemployee.spec.js

import { test } from '../../fixtures/fixtures';
import { expect } from '@playwright/test';

const testData = require('../../data/webTestData.json');

test.beforeAll(async ({}) => {
      
});

test('UI - Delete an employee',{tag:'@uitests'}, async ({ page, loginPage, dashboardPage, employeePage, credentials, newEmployee }) => {
  test.setTimeout(60000);
  await loginPage.gotoLoginPage();
  //await loginPage.login(credentials.username, credentials.password);  -- No need to login again as using state auth file
  await dashboardPage.navigateToPIM();
  await employeePage.addEmployee(newEmployee.firstName, newEmployee.lastName);
  await employeePage.navigateToDashboard();
  await dashboardPage.navigateToPIM();
  await employeePage.searchEmployee(`${newEmployee.firstName} ${newEmployee.lastName}`);
  await employeePage.deleteEmployee();
});

test.afterAll(async () => {
  console.log('Delete Employee Test executed');
 });
