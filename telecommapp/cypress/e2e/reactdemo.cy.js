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
        startServer()
        cy.visit("http://localhost:3000")

    })

    beforeEach('Load the data',()=>{
        loadDataFromDb()
    })
    afterEach('close the db',()=>{
        closeDB()
    })
    //visit http://localhost:3000 and confirm it is running
    it('visit http://localhost:3000 and confirm it is running',()=>{

        cy.screenshot()
    })

    it('visit http://localhost:3000 and confirm it is running',()=>{

        cy.screenshot()
    })
    after('After All Test cases executed',()=>{
        stopServer()
    })
})
