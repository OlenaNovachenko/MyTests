const { BasePage } = require("./basePage");
exports.RegistrationPage = class RegistrationPage extends BasePage {

    constructor(page) {
        super(page, '/sign-up');
        this.fullname = page.locator("[placeholder='Full name']");
        this.emailAddress = page.locator("[placeholder='Email address']");
        this.passwordreg = page.locator("[placeholder='Password']");
        this.registerButton = page.getByRole('button');
        this.signIn = page.locator("[href='/sign-in']");


    }

    async registration(userfullname, userEmailAddress, userPassword) {
        await this.fullname.type(userfullname);
        await this.emailAddress.type(userEmailAddress);
        await this.passwordreg.type(userPassword);
        await this.registerButton.click();
    }
    async clicksignIn(){
        await this.signIn.click()
    }


}