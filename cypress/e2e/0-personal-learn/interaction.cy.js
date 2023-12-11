/// <reference types="cypress" />

describe('Browser Action', () =>{
it('Should load books website',()=>{
cy.visit('https://books.toscrape.com/index.html')
cy.url().should('include','index.html')
// cy.get('a').contains('Travel').click()
// cy.get('h1').contains('Travel')
})

it('Should click on travel category', ()=>{
    cy.visit('https://books.toscrape.com/index.html')
cy.url().should('include','index.html')
    cy.get('a').contains('Travel').click()
    cy.get('h1').should('have.text','Travel')
})
})