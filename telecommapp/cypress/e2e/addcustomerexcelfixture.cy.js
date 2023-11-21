describe('Read Data from Excel File',()=>{
   let rowLength

    before(() => {
        cy.task('parseXlsx', { filePath: 'cypress/fixtures/customer.xlsx'}).then((rows) => {
            rowLength = rows.length;
            cy.writeFile("cypress/fixtures/xlsxData.json", { rows })
        })
        // cy.visit(Cypress.config('baseUrl'));
    })

    beforeEach('visit telecom project',()=>{
        cy.visit('https://demo.guru99.com/telecom/index.html')
    })

    it('Click on Add Customer',()=>{
        cy.get("#one > div > div.flex-item.left > div:nth-child(1) > h3 > a")
            .should('be.visible')
            .click()
    })

    it('Fill the customer Form',()=> {
        cy.visit('https://demo.guru99.com/telecom/addcustomer.php')
        cy.log(rowLength)
    });

})
