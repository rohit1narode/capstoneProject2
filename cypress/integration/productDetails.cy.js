describe('Featured Product Image and Details Verification', () => {
    it('should verify product image, details', () => {
      // Visit the Automation Test Store homepage
      cy.visit('/');
  
      // Check if the featured product image (first thumbnail) is visible
      cy.get("body > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > section:nth-child(7) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2")
        .should('be.visible')   // Verify that the featured product image is visible
        .click();               // Click on the featured product image
  
      // Verify that the updated larger product image is visible
      cy.get("a[title='blue cotton t-shirt']")
        .should('be.visible');   // Ensure the larger version of the image is visible
  
      // Verify that the product name 'Skinsheen Bronzer Stick' is visible
      cy.get('span.bgnone')
        .should('contain.text', 'Casual 3/4 Sleeve Baseball T-Shirt');
  
      // Verify that the product price is visible
      cy.get('.productpageprice')
        .should('contain.text', '$14.00');
  
      // Verify that the quantity input field is visible and has the default value of '1'
      cy.get('#product_quantity')
        .should('be.visible')
        .and('have.value', '1');
  
      // Verify that the "Add to Cart" button is visible
      cy.get('.cart')
        .should('be.visible');
    });
});