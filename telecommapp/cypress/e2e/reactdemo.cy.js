describe('kick start with cypress test',()=>{

    before('Visit the application',()=>{
        cy.visit("http://localhost:3000")
    })

    //visit http://localhost:3000 and confirm it is running
    it('visit http://localhost:3000 and confirm it is running',()=>{

        cy.screenshot()
    })

})
