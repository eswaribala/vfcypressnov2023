describe('Read Data from Excel File',()=>{
   let rowLength

    before('Load and Parse Excel Sheet',()=>{
        cy.task(('parseXlsx',{ filePath: 'cypress/fixtures/customer.xlsx'}),(rows)=>{
               rowLength=rows.length;
               cy.log(rowLength)
        })

    })

})
