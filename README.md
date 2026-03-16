# Playwright E2E Automation Tests

## Project Description

This project contains automated end-to-end tests for a demo e-commerce website.

The goal of the project is to validate core user flows such as login, product browsing, cart operations, checkout process, and navigation.

The automation suite verifies that the main functionalities of the application work correctly and remain stable after changes.

The tests cover the following areas:

- Login functionality
- Inventory (products) page
- Product details
- Shopping cart operations
- Checkout flow
- Navigation menu and logout

The tests are written using Playwright with TypeScript and follow the Page Object Model (POM) design pattern.

---

## Prerequisites

Before running the project, make sure the following tools are installed:

- Node.js (version 18 or higher recommended)
- npm
- Git

You can verify installation by running:

node -v  
npm -v  
git -v

---

## Installation Instructions

### 1. Clone the repository

git clone https://github.com/<your-username>/<repository-name>.git

Navigate into the project folder:

cd <repository-name>

---

### 2. Install dependencies

npm install

---

### 3. Install Playwright browsers

npx playwright install

---

### 4. Environment variables setup

Create a `.env` file in the root directory.

BASE_URL=https://www.saucedemo.com
DEFAULT_USER=standard_user
LOCKED_USER=locked_out_user
PASSWORD=secret_sauce

A sample file `.env.example` is included in the project.

---

## Running the Tests

### Run all tests

npx playwright test

---

### Run a specific test file

Example:

npx playwright test tests/cart/cart.spec.ts

---

### Run tests in headed mode

npx playwright test --headed

---

### Run tests in headless mode

npx playwright test --headless

---

## Viewing Test Reports

After running tests, Playwright generates an HTML report.

To open the report run:

npx playwright show-report

The report includes:

- Test results
- Execution steps
- Failure details
- Screenshots

---

## Project Structure

## Project Structure

project-root/
├── tests/                  # All the tests divided into modules
│   ├── login/              # Login tests
│   ├── inventory/          # Inventory page tests
│   ├── cart/               # Cart tests
│   ├── checkout/           # Checkout process tests
│   ├── navigation/         # Navigation tests
│   └── fixtures.ts         # Custom Playwright fixtures used by tests
│
├── pages/                  # Page Object Model (POM) - all the pages on site
│   ├── login.page.ts
│   ├── inventory.page.ts
│   ├── product.page.ts
│   ├── cart.page.ts
│   ├── checkout.page.ts
│   └── navigationMenu.page.ts
│
├── config/                 # Configuration 
│   ├── constants.ts        # Constant values like URLs, credentials, and enums
│   └── types.ts            # TypeScript types used across the project
│
├── TEST_PLAN.md            # Detailed test planning document
├── .env.example            # Example environment variables file
├── package.json            # Project dependencies and scripts
├── package-lock.json   
├── tsconfig.json           # TypeScript configuration
├── playwright.config.ts    # Playwright configuration
└── README.md               # Project documentation

---

## Technologies Used

- Playwright
- TypeScript
- Node.js
- npm
- Page Object Model (POM)
- dotenv