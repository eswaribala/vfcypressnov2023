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
        cy.visit('https://demo.guru99.com/telecom/addcustomer.php')
        cy.get("#done").should('have.css','opacity','0')
            .click({force:true})
        cy.get("input[id='fname']").should('be.visible').type("Parameswari")
        cy.get("input[id='lname']").should('be.visible').type("Bala")
        cy.get("input[id='email']").should('be.visible').type("parameswaribala@gmail.com")
        cy.get("textarea[id='message']").should('be.visible').type("Chennai")
        cy.get("input[id='telephoneno']").should('be.visible').type("995032862")
        cy.get("#main > div > form > div > div:nth-child(9) > ul > li:nth-child(1) > input[type=submit]")
            .click({force:true})
        cy.xpath("//*[@id=\"main\"]/div/div/table/tbody/tr[1]/td[2]/h3").then(($h3)=>{
            return $h3.text()
        }).as('customerId')
        cy.get('@customerId').then((customerId)=>{
            cy.log(customerId.toString())
        })
    })

    

})

