import testData from '../../fixtures/test-data.json';

describe('SauceDemo Checkout Tests', () => {
    before(() => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
    });

    it('should complete the checkout process', () => {
        cy.get('.shopping_cart_link').click();
        cy.get('[data-test="checkout"]').click();

        const { firstName, lastName, postalCode } = testData.saucedemo.checkout;
        cy.get('[data-test="firstName"]').type(firstName);
        cy.get('[data-test="lastName"]').type(lastName);
        cy.get('[data-test="postalCode"]').type(postalCode);
        cy.get('[data-test="continue"]').click();
        cy.get('[data-test="finish"]').click();
        cy.contains('Thank you for your order!').should('be.visible');
    });
});