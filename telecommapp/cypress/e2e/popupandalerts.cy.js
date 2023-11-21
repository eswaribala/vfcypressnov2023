describe('Test Popup and Alerts',()=>{

    Cypress.on('uncaught:exception', (err, runnable) => {
// returning false here prevents Cypress from // failing the test
        return false
    });

    it('close alert popup',()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.on('window:alert',($str)=>{

            expect($str).to.eq('I am a JS Alert')
            cy.contains("Click for JS Alert").click()
        })
    })


})
