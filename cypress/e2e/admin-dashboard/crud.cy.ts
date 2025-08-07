describe('OrangeHRM Admin CRUD Tests', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.loginAsAdmin(); // Your custom command
    });

    it('should navigate to Admin page', () => {
        cy.get('nav').contains('Admin').click();
        cy.url().should('include', '/admin/viewSystemUsers');
    });

    // Example: Search user (instead of full CRUD for demo purposes)
    it('should search for an existing user', () => {
        cy.get('nav').contains('Admin').click();
        cy.contains('label', 'Username')
            .parent()
            .next()
            .find('input')
            .type('Admin');

        cy.get('button[type="submit"]').click();
        cy.contains('Admin').should('exist');
    });
});
