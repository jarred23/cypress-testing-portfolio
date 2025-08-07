describe('Book Store Application - Books List', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/books')
    })

    it('displays list of books', () => {
        cy.get('.rt-table').should('exist')
        cy.get('.rt-tbody .rt-tr-group').should('have.length.greaterThan', 0)
    })

    it('searches books by title', () => {
        cy.get('#searchBox').type('Git')
    })
})
