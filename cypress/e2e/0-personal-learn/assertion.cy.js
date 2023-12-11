/// <reference types="cypress" />

describe('Browser action',() => {

   it('Should load correct url', () => {
    cy.visit('http://example.com/', {timeout: 10000})
    cy.get('h1').should('be.visible')
    cy.url().should('include', 'example.com')
   });

   // it('Should check correct url', () => {
  
   // });

//    it('Should check for personal correct element on the page',() => {
//     cy.get('h1').should('be.visible')
//    })
});