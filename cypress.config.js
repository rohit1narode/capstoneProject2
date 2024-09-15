const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern : "cypress/integration/**/*.cy.js",
    pageLoadTimeout: 120000,
    reporter: 'cypress-mochawesome-reporter',              // Specify the reporter
    reporterOptions: {
      reportDir: 'cypress/reports',                        // Directory for the report files
      overwrite: false,
      html: true,                                          // Generate HTML reports
      json: true                                         
    },
    baseUrl: 'https://automationteststore.com/' 
  },
});
