declare namespace Cypress {
    interface Chainable<Subject = any> {
        loginAsAdmin(): void
    }
}

declare global {
    namespace Cypress {
        interface Chainable {
            loginAsAdmin(): Chainable<void>;
        }
    }
}