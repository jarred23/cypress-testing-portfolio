describe('Elements - Text Box and Check Box', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/elements');
    });

    it('Text Box - should fill and verify submitted data', () => {
        cy.get('#item-0').click();
        cy.get('#userName').type('Jarred');
        cy.get('#userEmail').type('jarred@example.com');
        cy.get('#currentAddress').type('123 Cypress St');
        cy.get('#permanentAddress').type('456 Test Ave');
        cy.get('#submit').click();
        cy.get('#output #name').should('contain', 'Jarred');
        cy.get('#output #email').should('contain', 'jarred@example.com');
    });

    it('Check Box - should check and verify "Desktop"', () => {
        cy.get('#item-1').click();
        cy.get('[class="rct-checkbox"]').click();
        cy.get('#result').should('contain', 'desktop');
    });
});
