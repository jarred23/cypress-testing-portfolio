import testData from '../../../fixtures/test-data.json';

describe('Form Validation Tests', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/text-box');
    });

    it('should submit form with valid data', () => {
        const user = testData.formValidation.validUser;
        cy.get('#userName', {timeout:500000}).type(user.name);
        cy.get('#userEmail').type(user.email);
        cy.get('#currentAddress').type(user.message);
        cy.get('#submit').click();
        cy.get('#output').should('be.visible');
    });

    it('should not submit form with invalid data', () => {
        const user = testData.formValidation.invalidUser;
        cy.get('#userName').type(user.name);
        cy.get('#userEmail').type(user.email);
        cy.get('#currentAddress').type(user.message);
        cy.get('#submit').click();
        cy.get('#userEmail').should('have.class', 'field-error');
    });
});