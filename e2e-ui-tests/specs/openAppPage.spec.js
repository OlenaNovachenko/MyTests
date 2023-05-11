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
        await loginPage.login(users.stage.admin.email, users.stage.admin.password);
    });

    test.only('Open App Page', async ({ page }) => {
        await mainPage.openAppointmentsPage();
        await expect(page).toHaveURL('http:///omega-stage.qa.nolimit.school/vertical/appointments');
    });
});
