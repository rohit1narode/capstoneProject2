// describe('Cart Management - Add, Remove Items, and Verify Cart', () => {
//     it('Add 2items in the cart, remove one, and validate the cart', () => {
//       // Visit the Automation Test Store
//       cy.visit('/');

//       cy.loginToAccount('rohit', 'rohit123');
      
//       cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=68"]').click();

//       cy.get('li:nth-child(2) a:nth-child(1) img:nth-child(1)').click();

//       cy.get('.maintext').contains('T-shirts');

//       cy.get('.thumbnails.grid.row.list-inline').should('be.visible');

//       cy.get(':nth-child(3) > .thumbnail > :nth-child(1) > img').should('be.visible');

//       cy.get(':nth-child(3) > .thumbnail > .pricetag > .productcart > .fa').click();

//       cy.get('.cart', { timeout: 10000 }).click();

//       cy.go(-2);

//       cy.get("div[class='col-md-3 col-sm-6 col-xs-12'] img[alt='blue cotton t-shirt']").click();

//       cy.get('.cart', { timeout: 10000 }).click();

//       // remove element from cart
//       cy.xpath('//body[1]/div[1]/div[2]/div[1]/div[1]/div[1]/form[1]/div[1]/div[1]/table[1]/tbody[1]/tr[2]/td[7]/a[1]/i[1]').click();

//       cy.xpath('//body[1]/div[1]/div[2]/div[1]/div[1]/div[1]/form[1]/div[1]/div[1]/table[1]/tbody[1]/tr[2]').should('have.length', '1')

//       cy.get('select.form-control').first().select('Logout'); //select logout from dropdown

//         // Click on the "Continue" button
//       cy.get('a.btn.btn-default.mr10[title="Continue"]').click();

//         // Verify redirection to the homepage
//       cy.url().should('eq', 'https://automationteststore.com/'); // URL of the homepage

//     });
//   });