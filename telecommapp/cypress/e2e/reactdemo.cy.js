describe('kick start with cypress test',()=>{

    //visit http://localhost:3000 and confirm it is running
    it('visit http://localhost:3000 and confirm it is running',()=>{
        cy.visit("http://localhost:3000")
        cy.screenshot()
    })

})
