describe('Browser Windows Tests', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/browser-windows'); // update URL as needed
    });

    it('clicks Browser Windows and verifies URL', () => {
        cy.url().should('include', 'browser-windows'); // adjust to your app
    });

    it('checks if new window button exists', () => {
        cy.get('#windowButton').should('exist'); // example element on page
    });
});
