describe('Elements - Buttons and Links', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/elements');
    });

    it('Buttons - should perform click, double click, and right click', () => {
        cy.get('#item-4').click();
        cy.get('#doubleClickBtn').dblclick();
        cy.get('#doubleClickMessage').should('contain', 'You have done a double click');

        cy.get('#rightClickBtn').rightclick();
        cy.get('#rightClickMessage').should('contain', 'You have done a right click');

        cy.get('[class="btn btn-primary"]').eq(2).click();
        cy.get('#dynamicClickMessage').should('contain', 'You have done a dynamic click');
    });

    it('Links - should verify links open in new tab and respond', () => {
        cy.get('#item-5').click();
        cy.get('#simpleLink').should('have.attr', 'href').and('include', 'demoqa.com');
        cy.get('#dynamicLink').should('have.attr', 'href').and('include', 'demoqa.com');
    });
});
