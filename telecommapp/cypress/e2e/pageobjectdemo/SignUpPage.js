import {BasePage} from "./BasePage";

export class SignUpPage extends BasePage{

    register(testData){
        //refer support command.js for custom command
        cy.signup(testData)
    }

}
