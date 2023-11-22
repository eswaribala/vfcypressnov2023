import {BasePage} from "./BasePage";

export class LoginPage extends BasePage{

    login(testData){
        cy.get("#email").type(testData.email)
        cy.get("#password").type(testData.password)
        cy.get("input[type='submit']").click()
    }
}
