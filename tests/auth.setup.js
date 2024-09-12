import { test as setup } from "@playwright/test";
import { LoginPage } from "../pages/login";
const test = require('../fixtures/fixtures');
//const LoginPage = require('../pages/login');
const fs = require('node:fs');
const path = require('node:path');
const webTestData = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/webTestData.json')));
const authFile = 'playwright/.auth/user.json';
 
setup("WebApp Login", async ({ page }) => {
    // Peform Login Once
    //const logPage = new LoginPage(page);
    const loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    //await loginPage.goto('https://opensource-demo.orangehrmlive.com/web/index.php');
    await loginPage.login(webTestData.username, webTestData.password);
    // Save signed-in state to STORAGE_STATE.
    await page.context().storageState({ path: authFile });
  });