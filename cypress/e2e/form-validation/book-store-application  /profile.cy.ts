describe('Book Store Application - User Profile', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/login')
        cy.get('#userName').type('testuser')
        cy.get('#password').type('Test@1234')
        cy.get('#login').click()
        cy.url().should('include', '/profile')
    })

    it('displays user profile with books', () => {
        cy.get('.profile-wrapper').should('exist')
        cy.get('.rt-tbody .rt-tr-group').should('have.length.greaterThan', 0)
    })
})
