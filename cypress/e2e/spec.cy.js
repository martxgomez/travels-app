describe('load', () => {
  it('passes', () => {
    cy.visit('https://travelers-app.netlify.app')
    cy.get('.navbar').should('exist')
    cy.get('.footer').should('exist')
    cy.get('.dashboard-container').should('exist')
  })
})

describe('view a travel', () => {
  it('passes', () => {
    cy.visit('https://travelers-app.netlify.app')
    cy.get('.travel-card').contains("London").click()
  })
})

describe('create a travel', () => {
  it('passes', () => {
    cy.visit('https://travelers-app.netlify.app')
    cy.get('.navbar').contains("My trips").click()
    cy.get('.my-trips-container').contains("+").click()
    cy.get(".form").should("be.visible");
    cy.get('input').first().type("Valencia")
    
  })
})
