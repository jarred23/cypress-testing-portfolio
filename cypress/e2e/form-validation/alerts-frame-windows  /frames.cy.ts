describe('Frames Tests', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/frames');
    });

    it('clicks Frames and verifies iframe exists', () => {
        cy.get('iframe#frame1').should('exist');
    });

    it('checks iframe content', () => {
        cy.get('iframe#frame1').then(($iframe) => {
            const body = $iframe.contents().find('body');
            cy.wrap(body).find('h1').should('contain.text', 'This is a sample page');
        });
    });
});
