
describe('User Registration', () => {
    it('should complete the registration form with valid data', () => {
        // Visit the registration page
        cy.visit('/'); 

        // Select "Account" from the first dropdown
        cy.get('select.form-control').first().select('Account');
        
        // Verify the exact URL redirection
        cy.url().should('eq', 'https://automationteststore.com/index.php?rt=account/login');

        // Click on the 'Continue' button to start registration
        cy.get('button[title="Continue"]').click();

        // Fill in the registration form
        cy.get('#AccountFrm_firstname').type('rohit');
        cy.get('#AccountFrm_lastname').type('narode');
        cy.get('#AccountFrm_email').type('rohitnarode495@gmail.com');
       
        cy.get('#AccountFrm_address_1').type('123 Main St');
        cy.get('#AccountFrm_city').type('ptown');
        cy.get('#AccountFrm_postcode').type('12345');
        
        // Select a country from the dropdown
        cy.get('#AccountFrm_country_id').select('India'); // Ensure 'Togo' is a valid option
        
        // Select a region (state) from the dropdown
        cy.get('#AccountFrm_zone_id').select('Maharashtra'); // Select region from options

        // Fill in the login details
        cy.get('#AccountFrm_loginname').type('rohit');
        cy.get('#AccountFrm_password').type('rohit123');
        cy.get('#AccountFrm_confirm').type('rohit123');
        
        // Subscribe to the newsletter
        cy.get('#AccountFrm_newsletter1').check(); // Check the 'Yes' option
        
        // Agree to the terms and conditions
        cy.get('#AccountFrm_agree').check(); // Assuming it's a checkbox
        
        // Click on the 'Continue' button to submit the form
        cy.get('button[title="Continue"]').click();

        cy.wait(2000); // Adjust the wait time as needed
        
        cy.get('.alert').should('be.visible');
    });
});