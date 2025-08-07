describe('Modal Dialogs Tests', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/modal-dialogs');
    });

    it('clicks Modal Dialogs and verifies small modal opens', () => {
        cy.get('#showSmallModal').click();
        cy.get('.modal-content').should('be.visible');
        cy.get('#example-modal-sizes-title-sm').should('contain.text', 'Small Modal');
    });

    it('closes small modal', () => {
        cy.get('#showSmallModal').click();
        cy.get('#closeSmallModal').click();
        cy.get('.modal-content').should('not.exist');
    });
});
