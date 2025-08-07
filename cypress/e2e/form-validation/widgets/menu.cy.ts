describe('Menu Widget', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/menu')
    })

    it('renders menu items', () => {
        // check links inside the menu
        cy.get('#nav a').should('have.length.greaterThan', 0)
    })
})
