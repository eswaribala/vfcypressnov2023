import "cypress-xpath"
//step1
describe('Telecom Project E2E Tests',()=>{

    Cypress.on('uncaught:exception', (err, runnable) => {
// returning false here prevents Cypress from // failing the test
        return false
    });

    beforeEach('visit telecom project',()=>{
        cy.visit('https://demo.guru99.com/telecom/index.html')
    })

    it('Click on Add Customer',()=>{
       cy.get("#one > div > div.flex-item.left > div:nth-child(1) > h3 > a")
           .should('be.visible')
           .click()
    })

    it('Fill the customer Form',()=>{
         cy.addCustomer();
    })



})

