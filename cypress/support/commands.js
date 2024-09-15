// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// cypress/support/commands.js

// Cypress.Commands.add('login', (email, password) => {
//     cy.get('.header-links > #href_Sign_in').click();
//     cy.get('#username').clear().type(email);
//     cy.get('#password').clear().type(password);
//     cy.get('.button-row > .button > .button-right > .button-left').click();
//   });
  

// cypress/support/commands.js

Cypress.Commands.add('loginToAccount', (username, password) => {
  // Select 'Account' from the dropdown menu
  cy.get('select.form-control').first().select('Account');

  // Verify the URL redirection to the login page
  cy.url().should('eq', 'https://automationteststore.com/index.php?rt=account/login');

  // Enter login credentials
  cy.get('#loginFrm_loginname').type(username);
  cy.get('#loginFrm_password').type(password);

  // Click the login button
  cy.get('button[title="Login"]').click();
});
