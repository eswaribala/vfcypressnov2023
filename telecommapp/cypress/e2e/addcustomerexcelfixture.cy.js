import 'cypress-xpath'
describe('Read Data from Excel File',()=>{
   let rowLength
    Cypress.on('uncaught:exception', (err, runnable) => {
// returning false here prevents Cypress from // failing the test
        return false
    });
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
                  //for(let k=0;k<data.rows[i].data[j].length;k++) {
                    //  cy.log("Data", data.rows[i].data[j][k]);
                  //}
                   const firstName=data.rows[i].data[j][0]
                   const lastName=data.rows[i].data[j][1]
                   const email=data.rows[i].data[j][2]
                   const address=data.rows[i].data[j][3]
                   const phoneNo=data.rows[i].data[j][4]
                   cy.visit('https://demo.guru99.com/telecom/addcustomer.php')

                   cy.get("#done").should('have.css','opacity','0')
                       .click({force:true})
                   cy.get("input[id='fname']").should('be.visible').type(firstName)
                   cy.get("input[id='lname']").should('be.visible').type(lastName)
                   cy.get("input[id='email']").should('be.visible').type(email)
                   cy.get("textarea[id='message']").should('be.visible').type(address)
                   cy.get("input[id='telephoneno']").should('be.visible').type(phoneNo)
                   cy.get("#main > div > form > div > div:nth-child(9) > ul > li:nth-child(1) > input[type=submit]")
                       .click({force:true})
                   cy.xpath("//*[@id=\"main\"]/div/div/table/tbody/tr[1]/td[2]/h3")
                       .then(($h3)=>{
                           return $h3.text()
                       }).as('customerId')
                   cy.get('@customerId').then((customerId)=>{
                       cy.log(customerId.toString())
                   })
               }
            }
        })
    });

})
