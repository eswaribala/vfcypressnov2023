import {BasePage} from "./BasePage";
import {LoginPage} from "./LoginPage";
import {SignUpPage} from "./SignUpPage";
const basePage=new BasePage()
const loginPage=new LoginPage()
const signUpPage=new SignUpPage()

describe('Signup and Login Insurance Project',()=>{
    let testData
    Cypress.on('uncaught:exception', (err, runnable) => {
// returning false here prevents Cypress from // failing the test
        return false
    });
    before('Load the json file',()=>{
        cy.fixture('policyholder').then(function (policyholder) {
            testData = policyholder
        })
    })

    it('Launch the Insurance Project and Register',()=>{
        basePage.launchInsuranceProject()
        basePage.launchRegistrationPage()
        signUpPage.register(testData)
    })
    it('Launch the Insurance Project and Login',()=>{
        basePage.launchInsuranceProject()
        loginPage.login(testData)
    })

})
