// tests/ui/visualTestComparison.spec.js

import {expect, test} from '@playwright/test'
const testData = require('../../data/env.js');

test("Visual Test Comparison",{tag:'@visualtest'}, async ({page}) => {
    await page.goto(testData.WEB_URL);
    await page.waitForLoadState();
  
    expect(await page.screenshot({
        fullPage: true
    })).toMatchSnapshot("snapshotLogin.png")
 
});