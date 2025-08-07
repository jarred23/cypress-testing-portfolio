describe('Dragabble Widget', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/dragabble')
        cy.contains('Dragabble').click()
    })

    it('renders draggable box', () => {
        cy.get('#dragBox').should('exist')
    })
})
