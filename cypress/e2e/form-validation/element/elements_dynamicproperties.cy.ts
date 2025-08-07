describe('Elements - Dynamic Properties', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/elements');
    });

    it('Dynamic Properties - should check button becomes enabled after 5 seconds', () => {
        cy.get('#item-8').click();
        cy.get('#enableAfter').should('be.disabled');
        cy.wait(5500);
        cy.get('#enableAfter').should('not.be.disabled');
    });
});
