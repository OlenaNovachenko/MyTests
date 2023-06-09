const { test, expect, request } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { users } = require('../../test-data/users');
const { userData } = require('../../test-data/data');
const config = require("../../playwright.config");

let loginPage;
const env = config.default.use.env;


test.describe('Login tests', () => {

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.open();
    });

    test('Login with valid data', async ({ page }) => {
        await loginPage.login(users.stage.admin.email, users.stage.admin.password);
        await expect(page).toHaveURL('http://omega-stage.qa.nolimit.school/vertical/default-dashboard');
    });

    test('Open sign up page', async ({ page }) => {
        await loginPage.clicksignUp();
        await expect(page).toHaveURL('http://omega-stage.qa.nolimit.school/sign-up');
    });
});
