// cypress/support/commands.js

// Example of a custom command to login
Cypress.Commands.add('login', (username, password) => {
  cy.visit('/login');
  cy.get('input[name="username"]').type(username);
  cy.get('input[name="password"]').type(password, { log: false });
  cy.get('form').submit();
});

// Example of a custom command to register a new user
Cypress.Commands.add('register', (userDetails) => {
  cy.visit('/register');
  cy.get('input[name="username"]').type(userDetails.username);
  cy.get('input[name="email"]').type(userDetails.email);
  cy.get('input[name="password"]').type(userDetails.password, { log: false });
  cy.get('input[name="confirmPassword"]').type(userDetails.confirmPassword, { log: false });
  cy.get('form').submit();
});

// Example of a custom command to clear cookies
Cypress.Commands.add('clearCookies', () => {
  cy.clearCookies();
});
