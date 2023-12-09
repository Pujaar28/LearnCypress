/// <reference types="cypress" />

describe('My First Test',() =>{
    it('clicking "type shows the right headings"', ()=> {
        cy.visit('https://example.cypress.io')
        cy.pause()
        cy.contains('get').click()
    
        cy.url().should('include', 'cypress.io')

        cy.get('#inputEmail')
        .type('exampleEmail28@example.com')
        .should('have.value','exampleEmail28@example.com')
    });
});