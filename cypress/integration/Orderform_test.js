context("Form -- testing our form inputs", function () {
    before(() => {
        cy.visit("http://localhost:3000/pizza");
    });
    
    it("Test to add name to box", function () {
        cy.get('[data-cy="name"]').type("Elvis Costello").should("have.value", "Elvis Costello");
    })

    it("Test size dropdown", function () {
        cy.get('[data-cy="dropdownbtn').click();
        cy.get('[data-cy="Large"]').click();
    })

    it("Test to check boxes", function () {
        cy.get('[data-cy="extracheese"]').check().should("be.checked");
        cy.get('[data-cy="canadian"]').check().should("be.checked");  
        cy.get('[data-cy="tomatoes"]').check().should("be.checked");  
        cy.get('[data-cy="xSauce"]').check().should("be.checked");
        cy.get('[data-cy="pineapple"]').check().should("be.checked");
    })

    it("Test special instruction text box", function () {
        cy.get('[data-cy="special"]').type("Pump it up, when you don't really need it.  Pump it up, so you can feel it")
    })

    it("Test submit", function() {
        cy.get("[data-cy=submit]").click();
    })
});