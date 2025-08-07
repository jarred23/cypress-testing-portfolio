describe('Nested Frames Tests', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/nestedframes');
    });

    it('clicks Nested Frames and verifies outer frame exists', () => {
        cy.get('iframe#frame1').should('exist');
    });
});
