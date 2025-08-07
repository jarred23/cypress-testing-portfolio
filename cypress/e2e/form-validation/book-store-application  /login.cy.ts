describe('Book Store Application - Login', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/login')
    })

    it('shows login form', () => {
        cy.get('#userName').should('be.visible')
        cy.get('#password').should('be.visible')
        cy.get('#login').should('be.visible')
    })

    it('displays error message on invalid login', () => {
        cy.get('#userName').type('invalidUser')
        cy.get('#password').type('wrongPass')
        cy.get('#login').click()
        cy.get('#name').should('contain.text', 'Invalid username or password!')
    })
})
