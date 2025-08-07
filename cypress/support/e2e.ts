// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-file-upload';


// Prevent Cypress from failing tests due to uncaught exceptions (like cross-origin script errors)
Cypress.on('uncaught:exception', (err, runnable) => {
    // You can optionally log it
    console.warn('Ignoring uncaught exception:', err.message);

    // Return false to prevent test failure
    return false;
});
