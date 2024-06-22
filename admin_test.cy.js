describe('Website Test', () => {
  beforeEach(() => {
    
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    cy.get("[name='username']").type("Admin")
    cy.get("[name='password']").type("admin123")

    cy.get("button[type='submit']").click()
    cy.get('img[alt="client brand banner"]')
      .should('be.visible')
      .log('Login is successful')
    cy.url().should('include', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

    
    cy.contains('Admin').click()
    cy.url().should('include', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers')
  })

  it('Add a new user', () => {
    
    cy.contains('Add').click()
    cy.url().should('include', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser')

    cy.get("label:contains('User Role')").parent().next().find("div.oxd-select-text-input").click();
    
    
    cy.get("div[role='listbox'] div[role='option']").contains('Admin').click();
    cy.get("div.oxd-autocomplete-text-input--active input").type("John Doe");
    cy.get("div[role='listbox'] div[role='option']").contains("John Doe").click();
    cy.get("label:contains('Status')").parent().next().find("div.oxd-select-text-input").click();
    
    
    cy.get("div[role='listbox'] div[role='option']").contains('Enabled').click();
    cy.get("label:contains('Username')").parent().next().find("input").type("Tanaya1")
    cy.get("label:contains('Password')").parent().next().find('input[type="password"]').first().type("password123")
    cy.get("label:contains('Confirm Password')").parent().next().find('input[type="password"]').type("password123") 
    cy.get("button[type='submit']").click()
  })

  
})