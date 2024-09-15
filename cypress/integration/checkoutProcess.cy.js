// describe('Checkout Process', () => {
//     it('should complete the checkout process with valid login and payment information', () => {
//         // Visit the homepage
//         cy.visit('/'); 

//         cy.loginToAccount('rohit', 'rohit123');

//         cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=68"]').click();

//       cy.get('li:nth-child(2) a:nth-child(1) img:nth-child(1)').click();

//       cy.get('.maintext').contains('T-shirts');

//       cy.get('.thumbnails.grid.row.list-inline').should('be.visible');

//       cy.get(':nth-child(3) > .thumbnail > :nth-child(1) > img').should('be.visible');

//       cy.get(':nth-child(3) > .thumbnail > .pricetag > .productcart > .fa').click();

//       cy.get('.cart', { timeout: 10000 }).click();
  
//       cy.get('#cart_checkout1').click();   // Proceed to checkout  

//       cy.get('#checkout_btn').click();

//         //  cy.get('button#checkout_btn').click(); // Confirm order button

//       cy.get('h1').should('contain.text', ' Your Order Has Been Processed!'); // Verify the confirmation message
//     });
// });
