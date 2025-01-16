describe("load", () => {
  it("passes", () => {
    cy.visit("https://travelers-app.netlify.app");
    cy.get(".navbar").should("exist");
    cy.get(".footer").should("exist");
    cy.get(".dashboard-container").should("exist");
  });
});

describe("view a travel", () => {
  it("passes", () => {
    cy.visit("https://travelers-app.netlify.app");
    cy.get(".travel-card").contains("London").click();
  });
});

// describe('create a travel', () => {
//   it('passes', () => {
//     cy.visit('https://travelers-app.netlify.app')
//     cy.get('.navbar').contains("My trips").click()
//     cy.get('.my-trips-container').contains("+").click()
//     cy.get(".form").should("be.visible");
//     cy.get('input').eq(0).type("Valencia")
//     cy.get('input').eq(1).type("400")
//     cy.get('input').eq(2).type("https://www.spain.info/export/sites/segtur/.content/imagenes/cabeceras-grandes/valencia/ciudad-artes-ciencias-valencia-c-luca-bravo-u-UyUjtbu5vj4.jpg")
//     cy.get('input').eq(3).type("4")
//     cy.get('input').eq(4).type("4.2")
//     cy.get('input').eq(5).type("going to Malvarrosa{enter}")
//     cy.get('input').eq(6).type("La Ciudad de las Artes y las Ciencias{enter}")
//     cy.get('button').click()
//   })
// })
describe("edit a travel", () => {
  it("passes", () => {
    cy.visit("https://travelers-app.netlify.app");
    cy.get(".navbar").contains("My trips").click();
    cy.get(".my-trips-loading").should("not.exist");
    for (let i = 0; i < 6; i++) {
      cy.get(".my-trips-list button").last().click();
      cy.wait(500);
    }
    cy.get('.travel-card').contains("Valencia").should('exist')
    cy.get('.my-trips-container').contains("Valencia").scrollIntoView().should('be.visible').click()  //he intentado de varias formas editar el viaje de valencia pero no lo encuentra dentro del carrusel y me pasa igual para eliminarlo
  });
});
