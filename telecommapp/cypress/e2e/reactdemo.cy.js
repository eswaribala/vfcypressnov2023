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


    })

    beforeEach('Load the data',()=>{
        cy.log("Before Each invoked....")
        logs.push("Before Each invoked....")
        cy.visit("http://localhost:3000")
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

    it('Test paragraph length to be 3 and\n' +
        '            test 2nd paragraph contains postpaid',()=>{

        cy.log("Test Case 2 Called....")
        cy.get('p')
            .should('be.visible')
            .should('have.length',3)

        cy.get('p').should(($p)=>{
            expect($p).to.have.length(3)
        })
        cy.get('p').should(($p)=>{
            expect(($p).eq(1)).to.contain('Postpaid')
        })

    })
    after('After All Test cases executed',()=>{
        cy.log("After invoked....")
        stopServer()
        cy.writeFile('logs.txt',logs);
    })
})
