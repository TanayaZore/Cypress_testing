describe('Website Test', () => {

  it('Log in with invalid credentials', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    cy.get("[name='username']").type("Admi"); 
    cy.get("[name='password']").type("admin123");

    cy.get("button[type='submit']").click();

    cy.get('.orangehrm-login-error').should('be.visible');  

    cy.get('.orangehrm-login-error').should('contain', 'Invalid credentials'); 
  });

  it('Log in with valid credentials', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    cy.get("[name='username']").type("Admin")
    cy.get("[name='password']").type("admin123")

    cy.get("button[type='submit']").click()
    cy.get('img[alt="client brand banner"]')
      .should('be.visible')
      .log('Login is successful')
    cy.url().should('include', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
  })

 

  it('Forgot password page', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    cy.contains('Forgot your password?').click()
    cy.url().should('include', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode')
  })
});