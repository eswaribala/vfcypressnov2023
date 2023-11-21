describe('Test Popup and Alerts',()=>{

    Cypress.on('uncaught:exception', (err, runnable) => {
// returning false here prevents Cypress from // failing the test
        return false
    });

    it('close alert popup',()=>{
        cy.visit("https://chercher.tech/practice/popups")
        cy.get("[name='alert']")
        cy.on('window:alert',($str)=>{
            expect($str).toEqual('I am alert from window')
            cy.get("[name='alert']").click()
        })
    })


})
