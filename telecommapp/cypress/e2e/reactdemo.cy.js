function startServer(){

}

function stopServer(){

}

function  loadDataFromDb(){

}

function closeDB(){

}


describe('kick start with cypress test',()=>{

    const logs=[]


    before('Visit the application',()=>{
        cy.log("Before invoked....")
        logs.push("Before invoked....")
        startServer()
        cy.visit("http://localhost:3000")

    })

    beforeEach('Load the data',()=>{
        cy.log("Before Each invoked....")
        logs.push("Before Each invoked....")
        loadDataFromDb()
    })
    afterEach('close the db',()=>{
        cy.log("After Each invoked....")
        closeDB()
    })
    //visit http://localhost:3000 and confirm it is running
    it('Test h1 has text or contains text as Vodafone Recharge',()=>{
        cy.log("Test Case h1 called....")
        //cy.screenshot()
         cy.get('h1')
             .should('exist')
             .should('be.visible')
             .should('contain','Vodafone Recharge')

    })

    it('visit http://localhost:3000 and confirm it is running',()=>{

        cy.log("Test Case 2 Called....")

    })
    after('After All Test cases executed',()=>{
        cy.log("After invoked....")
        stopServer()
        cy.writeFile('logs.txt',logs);
    })
})
