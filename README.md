# Cypress Testing Portfolio

![Cypress Tests](https://github.com/jarred23/cypress-testing-portfolio/actions/workflows/cypress_workflow.yml/badge.svg)
![GitHub contributors](https://img.shields.io/github/contributors/jarred23/cypress-testing-portfolio)

![GitHub pull requests](https://img.shields.io/github/issues-pr/jarred23/cypress-testing-portfolio)
![GitHub last commit](https://img.shields.io/github/last-commit/jarred23/cypress-testing-portfolio)
![GitHub issues](https://img.shields.io/github/issues/jarred23/cypress-testing-portfolio)
![GitHub Repo stars](https://img.shields.io/github/stars/jarred23/cypress-testing-portfolio?style=social)

This project is a comprehensive Cypress testing portfolio showcasing end-to-end UI and API automation tests across multiple real-world web applications. It demonstrates practical test design, reusable commands, fixtures, and TypeScript support.

---

## Table of Contents

* [Project Overview](#project-overview)
* [Test Suites](#test-suites)
* [Folder Structure](#folder-structure)
* [Getting Started](#getting-started)
* [Running Tests](#running-tests)
* [Technologies Used](#technologies-used)
* [Contributing](#contributing)
* [License](#license)

---

## Project Overview

This portfolio contains Cypress tests targeting several demo applications:

* **Admin Dashboard:** Functional UI tests for the OrangeHRM live demo application  
  URL: [https://opensource-demo.orangehrmlive.com/web/index.php/auth/login](https://opensource-demo.orangehrmlive.com/web/index.php/auth/login)

* **Form Validation:** End-to-end validation and UI tests for DemoQA’s form components  
  URL: [https://demoqa.com](https://demoqa.com)

* **SauceDemo:** UI tests for the SauceDemo ecommerce demo site, covering login and product interactions  
  URL: [https://www.saucedemo.com](https://www.saucedemo.com)

* **Book Store Application:** UI and API tests for the Book Store web application on DemoQA  
  URL: [https://demoqa.com/books](https://demoqa.com/books)

The project also includes GitHub Actions integration for CI/CD, API tests using Cypress, reusable custom commands, and fixtures for test data.

---

## Test Suites

| Suite Name          | Description                                                                 | Location                         |
| -------------------| --------------------------------------------------------------------------- | -------------------------------- |
| Admin Dashboard     | Tests authentication, navigation, and user management on OrangeHRM demo     | `cypress/e2e/admin-dashboard`    |
| Form Validation     | Validates forms and widgets with various inputs on DemoQA                   | `cypress/e2e/form-validation`    |
| SauceDemo           | Covers login, adding/removing products, and checkout flows                  | `cypress/e2e/saucedemo`          |
| Book Store UI       | Tests UI interactions like login, book selection, and deletion              | `cypress/e2e/bookstore-ui`       |
| Book Store API      | Validates endpoints for user creation, token generation, and book management| `cypress/e2e/bookstore-api`      |

---

## Folder Structure

```bash
cypress-testing-portfolio/
├── cypress/
│   ├── e2e/
│   │   ├── admin-dashboard/         # OrangeHRM UI tests
│   │   ├── form-validation/         # Form and widget tests (DemoQA)
│   │   ├── saucedemo/               # SauceDemo product tests
│   │   ├── bookstore-ui/            # Book Store Application UI tests
│   │   └── bookstore-api/           # Book Store Application API tests
│   ├── fixtures/                    # Test data (users, forms, books)
│   │   ├── practice-form-data.json
│   │   ├── test-data.json
│   │   └── users.json
│   ├── support/                     # Custom commands and setup
│   │   ├── commands.ts
│   │   ├── component/
│   │   ├── e2e/
│   │   ├── e2e.ts
│   │   └── index.d.ts
│   ├── screenshots/                 # Screenshots from failed tests
│   └── videos/                      # Test run videos
├── .github/workflows/
│   └── cypress_workflow.yml         # GitHub Actions CI configuration
├── cypress.config.ts                # Cypress and baseUrl configuration
├── package.json
├── package-lock.json
├── tsconfig.json
├── .gitignore
└── README.md
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

3. **Open Cypress Test Runner (GUI)**

```bash
npx cypress open
```

---

## Running Tests

**Headless CLI Run**

```bash
npx cypress run
```

**Run Specific Specs**

```bash
npx cypress run --spec "cypress/e2e/form-validation/form.cy.ts,cypress/e2e/saucedemo/login.cy.ts"
```

**Run Tests on CI (GitHub Actions)**

- Go to the GitHub Actions tab
- Select the "Run workflow" dropdown
- Provide optional spec paths as input (if configured)
- Trigger the run manually

---

## Technologies Used

* [Cypress](https://www.cypress.io/) — End-to-end testing framework
* TypeScript — Type-safe test definitions
* Node.js / npm — Dependency management and scripting
* GitHub Actions — CI pipeline for Cypress tests

---

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests for bug fixes, improvements, or new test suites.

---

## License
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

This project is licensed under the MIT License.
