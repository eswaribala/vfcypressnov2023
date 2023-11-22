// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('addCustomer',()=>{
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
    cy.xpath("//*[@id=\"main\"]/div/div/table/tbody/tr[1]/td[2]/h3")
        .then(($h3)=>{
            return $h3.text()
        }).as('customerId')
    cy.get('@customerId').then((customerId)=>{
        cy.log(customerId.toString())
    })
})

Cypress.Commands.add('signup',(testData)=>{
    cy.get("#user_title").select(testData.title)
    cy.get("#user_firstname").type(testData.firstName)
    cy.get("#user_surname").type(testData.surName)
    cy.get("#user_phone").type(testData.mobileNo)
    cy.get("#user_dateofbirth_1i").type(testData.year)
    cy.get("#user_dateofbirth_2i").type(testData.month)
    cy.get("#user_dateofbirth_3i").type(testData.day)
    cy.get("#licencetype_t").check()
    cy.get("#user_occupation_id").select(testData.occupation)
    cy.get("#user_licenceperiod").select(testData.licensePeriod)
    cy.get("#user_address_attributes_street").type(testData.address)
    cy.get("#user_address_attributes_city").type(testData.city)
    cy.get("#user_address_attributes_county").type(testData.country)
    cy.get("#user_address_attributes_postcode").type(testData.postalCode)
    cy.get("#user_user_detail_attributes_email").type(testData.email)
    cy.get("#user_user_detail_attributes_password").type(testData.password)
    cy.get("#user_user_detail_attributes_password_confirmation").type(testData.confirmPassword)
    cy.get("input[type='submit']").click()
})

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
