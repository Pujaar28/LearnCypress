/// <reference types = "cypress"/>
describe('Working with login',()=>{

  it('should login with valid username', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.fixture('sauceusers').then((sauceusers) => {
      sauceusers.validUsernames.forEach((username) => {
          cy.get('[data-test="username"]').type(username);
          cy.get('[data-test="password"]').type(sauceusers.password);
          cy.get('[data-test="login-button"]').click();
          // cy.clearCookies();
          // cy.clearLocalStorage();
          cy.visit('https://www.saucedemo.com/', { timeout: 10000 });
         
      });
  });    
  });
})

