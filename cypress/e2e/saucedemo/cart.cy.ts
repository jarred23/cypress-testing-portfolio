import testData from '../../fixtures/test-data.json';

describe('SauceDemo Cart Tests', () => {
    before(() => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
    });

    it('should add items to cart', () => {
        testData.saucedemo.products.forEach((product: string | number | RegExp) => {
            cy.contains(product).parents('.inventory_item').find('button').click();
        });
        cy.get('.shopping_cart_badge').should('have.text', testData.saucedemo.products.length.toString());
    });
});