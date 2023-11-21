//step1
describe('Telecom Project E2E Tests',()=>{

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
        cy.get("#done").should('have.css','opacity','0').check()

    })

})

