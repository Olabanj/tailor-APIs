/// <reference types="cypress"/>

describe("signup",function(){
    it("verify that browser loaded succesfully",function(){
        cy.visit("https://develop.groups.fitted.ng/")
        cy.url().should("include","fitted")

    })
})