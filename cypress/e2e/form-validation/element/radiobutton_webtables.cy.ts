describe('Elements - Radio Button and Web Tables', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/elements');
    });

    it('Radio Button - should select and verify "Impressive"', () => {
        cy.get('#item-2').click();
        cy.contains('label', 'Impressive').click();
        cy.get('.text-success').should('contain', 'Impressive');
    });

    it('Web Tables - should add a new record and verify it', () => {
        cy.get('#item-3').click();
        cy.get('#addNewRecordButton').click();
        cy.get('#firstName').type('Jarred');
        cy.get('#lastName').type('Smith');
        cy.get('#userEmail').type('jarred@example.com');
        cy.get('#age').type('30');
        cy.get('#salary').type('50000');
        cy.get('#department').type('Engineering');
        cy.get('#submit').click();
        cy.get('.rt-tbody').should('contain', 'Jarred');
    });
});
