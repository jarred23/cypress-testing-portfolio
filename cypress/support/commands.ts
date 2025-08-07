// support/commands.ts

Cypress.Commands.add('loginAsAdmin', (): void => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Wait for login form
    cy.get('input[name="username"]', { timeout: 10000 }).should('be.visible').type('Admin');
    cy.get('input[name="password"]').should('be.visible').type('admin123');

    cy.get('button[type="submit"]').should('be.visible').click();

    // Wait for dashboard to load (ensure login worked)
    cy.url({ timeout: 10000 }).should('include', '/dashboard');
});

