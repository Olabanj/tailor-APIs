/// <reference types="cypress"/>
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
  
describe("group fitted login",function(){
    it("Verify that the user successfully sign in",function(){

        cy.visit("https://develop.groups.fitted.ng/")
        cy.get("div[class='nav-right'] a[class='ani_btn ghost']").click()
        //Login form
        cy.get("body > div:nth-child(5) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)").type("ezenwathecla90@gmail.com")
        cy.get("body > div:nth-child(5) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > input:nth-child(1)").type("go@12345")
        cy.get('._33bUXyOYzwI5pbReo8K0rO').should('be.visible').click()
        
    })
})