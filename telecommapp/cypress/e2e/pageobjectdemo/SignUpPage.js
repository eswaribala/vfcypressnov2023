import {BasePage} from "./BasePage";

export class SignUpPage extends BasePage{

    register(testData){
        cy.signup(testData)
    }

}
