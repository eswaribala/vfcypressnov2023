describe('Test Popup and Alerts',()=>{

    Cypress.on('uncaught:exception', (err, runnable) => {
// returning false here prevents Cypress from // failing the test
        return false
    });

    it('close alert popup',()=>{
        cy.on('window:alert',($str)=>{
            expect($str).toEqual('I am alert')
            cy.get("[name='alert']").click()
        })
    })


})
