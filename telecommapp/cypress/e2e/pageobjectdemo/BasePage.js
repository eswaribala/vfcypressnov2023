export class BasePage{
    launchInsuranceProject(){
        cy.visit("https://demo.guru99.com/insurance/v1/index.php")
    }
    launchRegistrationPage(){
        cy.visit("https://demo.guru99.com/insurance/v1/register.php")
    }

}
