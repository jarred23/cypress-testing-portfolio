describe('Alerts Tests', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/alerts');
    });

    it('clicks Alerts and verifies alert is shown', () => {
        cy.window().then((win) => {
            cy.stub(win, 'alert').as('alertStub');
        });
        cy.get('#alertButton').click();
        cy.get('@alertStub').should('have.been.calledOnce');
    });

    it('clicks Alerts and verifies timer alert works', () => {
        cy.window().then((win) => {
            cy.stub(win, 'alert').as('alertStub');
        });
        cy.get('#timerAlertButton').click();
        cy.wait(6000);
        cy.get('@alertStub').should('have.been.calledOnce');
    });
});
