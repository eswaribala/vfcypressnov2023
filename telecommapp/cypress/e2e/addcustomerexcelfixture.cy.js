describe('Read Data from Excel File',()=>{
   let rowLength

    before('Load and Parse Excel Sheet',()=>{
        cy.task(('parseXlsx',{ filePath: 'cypress/fixtures/customer.xlsx'}),(rows)=>{
               rowLength=rows.length;

            cy.writeFile("cypress/fixtures/xlsxData.json", { rows })
        })

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
