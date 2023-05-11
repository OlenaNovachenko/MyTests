const { BasePage } = require("./basePage");
exports.MainPage = class MainPage extends BasePage {

    constructor(page) {
        super(page, '/vertical/default-dashboard');
        this.appointmentsPage = page.locator("[//a//span [text()='Departments']");
        this.patientsPage = page.getByRole("[class='Patients']");
        this.doctorsPage = page.getByRole("[class='Doctors']");
        this.departmentsPage = page.getByRole("[class='Doctors']");


    }

    async openAppointmentsPage(){
        await this.appointmentsPage.click()
    }
}