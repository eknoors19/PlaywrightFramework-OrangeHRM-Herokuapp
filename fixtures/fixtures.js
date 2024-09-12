// fixtures/fixtures.js

import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/login';
import { DashboardPage } from '../pages/dashboard';
import { EmployeePage } from '../pages/employee';
const testData = require('../data/webTestData.json');
export const pages = {
  loginPage: LoginPage
}

 export const test = base.extend({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },
  employeePage: async ({ page }, use) => {
    await use(new EmployeePage(page));
  },
  credentials: async ({}, use) => {
    await use({ username: testData.username, password: testData.password });
  },
  newEmployee: async ({}, use) => {
    await use(testData.newEmployee);
  }
});

