// pages/login.js
import { test, expect } from '@playwright/test';
const testData = require('../data/env.js');
//import { testData } from '../data/env.js';

export class LoginPage {
    constructor(page) {
        this.page = page
        this.username_field = page.getByPlaceholder('Username')
        this.password_field = page.getByPlaceholder('Password')
        this.login_button = page.getByRole('button', { name: 'Login' })
    }

    async gotoLoginPage() { 
        await this.page.goto(testData.WEB_URL);
    }
    async login(username, password){

        await this.username_field.fill(username,{delay:200});
        await this.password_field.fill(password,{delay:100});
        await this.login_button.click()
    }
}
