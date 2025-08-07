# Cypress Testing Portfolio

This project is a comprehensive Cypress testing portfolio showcasing end-to-end UI and API automation tests across multiple real-world web applications. It demonstrates practical test design, reusable commands, fixtures, and TypeScript support.

---

## Table of Contents

* [Getting Started](#getting-started)
* [Running Tests](#running-tests)
* [Technologies Used](#technologies-used)
* [Contributing](#contributing)
* [License](#license)

---

## Project Overview

This portfolio contains Cypress tests targeting three major demo applications:

* **Admin Dashboard:** Functional UI tests for the OrangeHRM live demo application
  URL: [https://opensource-demo.orangehrmlive.com/web/index.php/auth/login](https://opensource-demo.orangehrmlive.com/web/index.php/auth/login)

* **Form Validation:** End-to-end validation and UI tests for DemoQA’s form components
  URL: [https://demoqa.com](https://demoqa.com)

* **SauceDemo:** UI tests for the SauceDemo ecommerce demo site, covering login and product interactions
  URL: [https://www.saucedemo.com](https://www.saucedemo.com)

The project also includes API tests, custom Cypress commands, and fixtures for reusable test data.

---

## Test Suites

| Suite Name      | Description                                                             | Location                      |
| --------------- | ----------------------------------------------------------------------- | ----------------------------- |
| Admin Dashboard | Tests authentication, navigation, and user management on OrangeHRM demo | `cypress/e2e/admin-dashboard` |
| Form Validation | Validates forms and widgets with various inputs on DemoQA               | `cypress/e2e/form-validation` |
| SauceDemo       | Covers login, adding/removing products, and checkout flows              | `cypress/e2e/saucedemo`       |

---

## Folder Structure

```
cypress-testing-portfolio/
├── cypress/
│   ├── e2e/
│   │   ├── admin-dashboard/        # Admin dashboard UI test specs
│   │   ├── form-validation/        # Form validation UI test specs
│   │   └── saucedemo/              # SauceDemo UI test specs
│   ├── fixtures/                   # Test data files (JSON)
│   ├── support/                    # Custom commands and test setup
│   │   ├── commands.ts
│   │   ├── component/
│   │   ├── e2e/
│   │   ├── e2e.ts
│   │   └── index.d.ts
└── cypress.config.ts               # Cypress configuration
```

---

## Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/jarred23/cypress-testing-portfolio.git
cd cypress-testing-portfolio
```

2. **Install dependencies**

```bash
npm install
```

3. **Open Cypress Test Runner**

```bash
npx cypress open
```

---

## Running Tests

* Use the Cypress Test Runner GUI to select and run specific test suites or specs.
* Or run tests headlessly via CLI:

```bash
npx cypress run
```

---

## Technologies Used

* [Cypress](https://www.cypress.io/) — End-to-end testing framework
* TypeScript — Typed JavaScript support
* Node.js / npm — Dependency and script management

---

## Contributing

Contributions are welcome! Please open issues or submit pull requests for bug fixes, improvements, or new test suites.

---

## License

This project is licensed under the MIT License.