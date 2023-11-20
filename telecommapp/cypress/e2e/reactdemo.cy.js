function startServer(){

}

function stopServer(){

}

function  loadDataFromDb(){

}

function closeDB(){

}


describe('kick start with cypress test',()=>{

    before('Visit the application',()=>{
        cy.log("Before invoked....")
        startServer()
        cy.visit("http://localhost:3000")

    })

    beforeEach('Load the data',()=>{
        cy.log("Before Each invoked....")
        loadDataFromDb()
    })
    afterEach('close the db',()=>{
        cy.log("After Each invoked....")
        closeDB()
    })
    //visit http://localhost:3000 and confirm it is running
    it('visit http://localhost:3000 and confirm it is running',()=>{
        cy.log("Test Case 1 called....")
        cy.screenshot()
    })

    it('visit http://localhost:3000 and confirm it is running',()=>{

        cy.log("Test Case 2 Called....")
        cy.screenshot()
    })
    after('After All Test cases executed',()=>{
        cy.log("After invoked....")
        stopServer()
    })
})
