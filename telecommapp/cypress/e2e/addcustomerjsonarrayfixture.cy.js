import "cypress-xpath"
//step1
//test suite
describe('Telecom Project E2E Tests',()=>{
    let testData
    Cypress.on('uncaught:exception', (err, runnable) => {
// returning false here prevents Cypress from // failing the test
        return false
    });
    before('Load the json file',()=>{
        cy.fixture('customer').then(function (customer) {

            testData = customer
        })
    })

    beforeEach('visit telecom project',()=>{
        cy.visit('https://demo.guru99.com/telecom/index.html')
    })

    //test case
    it('Click on Add Customer',()=>{
        cy.get("#one > div > div.flex-item.left > div:nth-child(1) > h3 > a")
            .should('be.visible')
            .click()
    })

    it('Fill the customer Form',()=>{
        cy.visit('https://demo.guru99.com/telecom/addcustomer.php')

        cy.get("#done").should('have.css','opacity','0')
            .click({force:true})
        cy.get("input[id='fname']").should('be.visible').type(testData.firstName)
        cy.get("input[id='lname']").should('be.visible').type(testData.lastName)
        cy.get("input[id='email']").should('be.visible').type(testData.email)
        cy.get("textarea[id='message']").should('be.visible').type(testData.address)
        cy.get("input[id='telephoneno']").should('be.visible').type(testData.mobileNo)
        cy.get("#main > div > form > div > div:nth-child(9) > ul > li:nth-child(1) > input[type=submit]")
            .click({force:true})
        cy.xpath("//*[@id=\"main\"]/div/div/table/tbody/tr[1]/td[2]/h3")
            .then(($h3)=>{
                return $h3.text()
            }).as('customerId')
        cy.get('@customerId').then((customerId)=>{
            cy.log(customerId.toString())
        })
    })



})

