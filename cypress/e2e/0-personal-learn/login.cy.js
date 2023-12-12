/// <reference types="cypress" />


describe('Working with inputs',()=>{
    it('Visit the website', () => {
        cy.visit('zero.webappsecurity.com/login.html')
        cy.url().should('include','login.html')
    });
    it('Should fill username',()=>{
        cy.visit('zero.webappsecurity.com/login.html')
        cy.get('#user_login').clear()
        cy.get('#user_login').type('username')
    });
    it('Should fill username',()=>{
        cy.visit('zero.webappsecurity.com/login.html')
        cy.get('input[name="user_password"]').clear()
        cy.get('input[name="user_password"]').type('password')
    });

    it('Should check the checkbox for remember acc', () => {
        cy.visit('zero.webappsecurity.com/login.html')
        cy.get('#user_remember_me').check()
    });

    it('Should try to login', () => {
        cy.fixture("sauceusers").then(sauceusers=>{
            cy.visit('zero.webappsecurity.com/login.html')
            const username = sauceusers.username
            const password = sauceusers.password

            cy.get('#user_login').clear()
            cy.get('#user_login').type('username')
            cy.get('input[name="user_password"]').clear()
            cy.get('input[name="user_password"]').type('password')
            cy.get('.btn').click()
        })
    });
})