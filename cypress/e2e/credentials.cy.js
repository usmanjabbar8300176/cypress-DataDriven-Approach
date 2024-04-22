describe('Login Test', () => {
  it('should log in with different credentials', () => {
    cy.visit('https://www.saucedemo.com'); // Assuming '/login' is the URL of your login page

    // Read data from JSON file
    cy.fixture('credentials').then((credentials) => {
      credentials.forEach((credential) => {
        cy.get('#user-name').type(credential.username);
        cy.get('#password').type(credential.password);
        cy.get('#login-button').click();

        // Assert login success
        cy.url().should('include', '/inventory'); // Assuming '/inventory' is the URL after successful login
        cy.contains('Products').should('be.visible'); // Assuming 'product' is a text on the inventory page indicating successful login

        // Logout 
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').click()
      });
    });
  });
});
