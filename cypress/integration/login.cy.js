describe('Login and Logout', () => {
  it('should complete login and logout process using fixture', function () {
      // Load the fixture data for valid user inside the test case
      cy.fixture('login').then((userData) => {
          
          // Visit the website
          cy.visit('/');

          // Use the fixture data for login
          cy.loginToAccount(userData.username, userData.password);

          // Verify successful login by checking for "My Account" page
          cy.url().should('include', 'account/account');
          cy.get('h2.heading2 span').should('contain.text', 'My Account');

          // Select "Logout" from the dropdown
          cy.get('select.form-control').first().select('Logout');

          // Verify that the URL changes to the logout page
          cy.url().should('eq', 'https://automationteststore.com/index.php?rt=account/logout');

          // Click on the "Continue" button after logging out
          cy.get('a.btn.btn-default.mr10[title="Continue"]').click();

          // Verify redirection to the homepage
          cy.url().should('eq', 'https://automationteststore.com/');  // Replace with the actual homepage URL if different
      });
  });
});


describe.only('Login with invalid credentials', () => {
  it('should complete login and logout process using invalid credential', function () {
      // Load the fixture data for valid user inside the test case
      cy.fixture('invalid').then((userData) => {
          
          // Visit the website
          cy.visit('/');

          // Use the fixture data for login
          cy.loginToAccount(userData.username, userData.password);

          cy.get('.alert.alert-error.alert-danger').should('be.visible');
         
      });
  });
});









