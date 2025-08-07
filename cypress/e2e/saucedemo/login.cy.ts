import users from '../../fixtures/users.json';

describe('SauceDemo Login Tests', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
    });

    it('should login successfully with valid user', () => {
        cy.get('[data-test="username"]').type(users[0].username);
        cy.get('[data-test="password"]').type(users[0].password);
        cy.get('[data-test="login-button"]').click();
        cy.url().should('include', '/inventory');
    });

    it('should fail login with locked out user', () => {
        cy.get('[data-test="username"]').type(users[1].username);
        cy.get('[data-test="password"]').type(users[1].password);
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('be.visible');
    });
});