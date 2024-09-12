// tests/ui/login.spec.js

import {test as base} from '@playwright/test'
import {test} from '../../fixtures/fixtures';
import { expect } from '@playwright/test';

test('UI - Valid Login',{tag:'@uitests'}, async ({ page , loginPage}) => {
  await test.step(`Validate Login`, async () => {
    test.setTimeout(60000);
    await loginPage.gotoLoginPage();
    await page.waitForTimeout(3000);
    await expect(page).toHaveURL(/dashboard/);
  })
});

  test('UI - Verify Homepage Title',{tag:'@uitests'}, async ({ page , loginPage}) => {
    test.setTimeout(60000);
    await loginPage.gotoLoginPage();
    await page.waitForTimeout(3000);
    const title= await page.title();
    console.log(title);
    expect(title).toBe("OrangeHRM");
  });

  test.afterAll(async () => {
    console.log('Login Tests executed');
   });