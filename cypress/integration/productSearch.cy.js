

describe('Search Functionality and Image Visibility for Skincare', () => {
  it('should type "Skincare" into the search field, perform the search, and verify that the specific image is visible', () => {
      // Visit the Automation Test Store homepage
      cy.visit('/');
  
      // Type "Skincare" into the search input field and press Enter
      cy.get('input#filter_keyword')
        .should('be.visible')
        .type('Skincare')
        .type('{enter}'); // Perform the search
  
      // Verify that the specific image is visible
      cy.get('img[src="//automationteststore.com/image/thumbnails/18/6a/demo_product18_jpg-100013-250x250.jpg"]')
        .should('be.visible')
        .and('have.attr', 'alt', 'Absolute Anti-Age Spot Replenishing Unifying TreatmentSPF 15');
    });
});