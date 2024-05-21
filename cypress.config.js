const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8080',
    specPattern: 'cypress/integration/**/*.cy.{js,jsx,ts,tsx}', // Update this line
    supportFile: 'cypress/support/index.js'
  }
});
