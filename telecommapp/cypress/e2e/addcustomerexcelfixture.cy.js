describe('Read Data from Excel File',()=>{
   let rowLength

    before(() => {
        cy.task('parseXlsx', { filePath: 'cypress/fixtures/customer.xlsx'})
            .then((rows) => {
            rowLength = rows.length;
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
        cy.log("Row Length",rowLength.toString())
        cy.fixture('xlsxData').then((data) => {
            for (let i = 0; i < rowLength; i++) {
               for(let j=1;j<data.rows[i].data.length;j++) {
                  for(let k=0;k<5;k++) {
                      cy.log("Data", data.rows[i].data[j][k]);
                  }
               }
            }
        })
    });

})
