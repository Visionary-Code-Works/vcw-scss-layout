// cypress/support/index.js

// Import commands.js using ES2015 syntax:
import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands');

// Set a base URL for all tests
Cypress.config('baseUrl', 'http://localhost:8080');

// You can also set global before and after hooks here
before(() => {
  // Code to run before all tests
  cy.log('Starting test suite');
});

after(() => {
  // Code to run after all tests
  cy.log('Finished test suite');
});
