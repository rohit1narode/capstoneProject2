
describe('Homepage', () => {

  it('should load the homepage and verify that key elements are visible', () => {
      // Visit the Automation Test Store homepage
      cy.visit('/');

      // Verify that the homepage URL is correct
      cy.url().should('eq', 'https://automationteststore.com/');

      // Check that the logo image with title 'Automation Test Store' is visible
      cy.xpath("//img[@title='Automation Test Store']").should('be.visible');

      // Verify the 'Home' menu link with the class 'active menu_home' is visible
      cy.xpath("//a[@class='active menu_home']").should('be.visible');

    // Trigger the dropdown if needed
      cy.get('input#filter_keyword').click();
      cy.get('ul#search-category').should('be.visible');

      cy.xpath("//h4[contains(text(),'Welcome to the Automation Test Store!')]")
      .should('be.visible')
      .and('contain.text', 'Welcome to the Automation Test Store!');      
  });  

  it('should display the category links', () => {
    cy.visit('https://automationteststore.com/');
    cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=68"]').should('be.visible');
    cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=36"]').should('be.visible');
    cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=43"]').should('be.visible');
    cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=49"]').should('be.visible');
  });

  it.only('should navigate to a category, verify elements, check images, and navigate back', () => {
    // Visit the Automation Test Store homepage
    cy.visit('https://automationteststore.com/');

    // Click on a specific category (e.g., Apparel & Accessories)
    cy.get("a[href='https://automationteststore.com/index.php?rt=product/category&path=68']").click();

    // Verify the 'Shoes' link is visible and click on it
    cy.xpath("//a[normalize-space()='Shoes']").should('be.visible').click();

    // Verify that the first product image is visible on the Shoes page
    cy.xpath("//div[@class='contentpanel']//div[1]//div[2]//a[1]//img[1]").should('be.visible');

    // Go back to the previous page
    cy.go('back');

    // Click on the second product (use the provided CSS selector)
    cy.get('body > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(2) > div:nth-child(2) > a:nth-child(1)').click();

    // Verify that the image on the new product page is visible
    cy.xpath("//div[@class='contentpanel']//div[1]//div[2]//a[1]//img[1]").should('be.visible');
  });
});