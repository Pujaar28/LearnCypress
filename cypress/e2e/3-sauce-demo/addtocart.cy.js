/// <reference types = "cypress"/>
describe('Working with login',()=>{
    it('Add to cart then check out', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.fixture('sauceusers').then((sauceusers) => {
            const specificUsername = 'standard_user';
                cy.get('[data-test="username"]').type(specificUsername);
                cy.get('[data-test="password"]').type(sauceusers.password);
                cy.get('[data-test="login-button"]').click();
                cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
                cy.get('.shopping_cart_link').click();
                cy.get('[data-test="checkout"]').click();
                cy.get('[data-test="firstName"]').type('Puja Aditya');
                cy.get('[data-test="lastName"]').type('Raihan');
                cy.get('[data-test="postalCode"]').type('41234');
                cy.get('[data-test="continue"]').click();
                cy.get('[data-test="finish"]').click()
                cy.get('[data-test="back-to-products"]').click()
        });  
    });
  })
  