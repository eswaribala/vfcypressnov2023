import "cypress-iframe"

describe('Iframe Content Test',()=>{

    it('Get the draggable block text using iframe',()=>{

        cy.visit('https://jqueryui.com/draggable/')
        cy.frameLoaded(".demo-frame")
        cy.iframe().find("#draggable").then(($div)=>{
            let fmtText=$div.text()
            expect((fmtText)).to.contain('Drag me around')
            cy.log(fmtText)
        })

    })

})
