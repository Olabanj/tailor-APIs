/// <reference types="cypress"/>
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
  
describe("group fitted login",function(){
    it("Verify that the user successfully sign in",function(){
       
        cy.visit("https://staging.groups.fitted.ng/")
        cy.url().should("include","fitted")
        cy.wait(3000)
        cy.get("div[class='nav-right'] a[class='ani_btn ghost']").click()
        //Login form
        cy.get("body > div:nth-child(5) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)").type("ezenwathecla90@gmail.com")
        cy.get("body > div:nth-child(5) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > input:nth-child(1)").type("go@12345")

        cy.get("body > div:nth-child(5) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(5) > button:nth-child(1)").should('be.visible').click({force:true})
        cy.get("a[class='measure_add'] div span").click()
        cy.get("#proceed_btn").should("be.visible").click()
        
        cy.get("div[class='box_option'] button").click()
        cy.url().should("include","add")
    
    })
    it("Add measurement",function(){
        cy.get("input[name='name']").type("layi wears").should("be.visible")
        cy.get("input[name='neck']").type("15")
        cy.get("input[name='shoulder']").type("15")
        cy.get("input[name='chest']").type("34")
        cy.get("input[name='tommyCircumferenceTop']").type("33")
        cy.get("input[name='sleeveLength']").type("23")
        cy.get("input[name='roundElbow']").type("22")
        
        cy.get("button[type='submit']").should("be.visible").click()

    })
    it("trouser measurement",function(){
        cy.get("input[name='name']").type("bottom measurement")
        cy.get("input[name='trouserWaist']").type("29")
        cy.get("input[name='trouserHip']").type("31")
        cy.get("input[name='trouserLength']").type("30")
        cy.get("input[name='thighs']").type("22")
        cy.get("button[type='submit']").should("be.be.visible").click()
        cy.get("input[value='false'][name='edittable']").check()
        cy.get("input[value='false'][name='terms']").check()
        cy.get("button[type='submit']").click()
    })
    describe('Example to demonstrate file upload in cypress', function () {
        before(function () {
            cy.visit('https://staging.groups.fitted.ng/app/icp/measurements/add')
        })
        it('File Upload using cypress-file-upload npm package', () => {
        const filepath = 'C:\Users\hp\Desktop\QA FOLDER/capture0.png'
        cy.get('input[type="file"]').attachFile(filepath)
        cy.get('#file-submit').click()
        cy.get('#uploaded-files').contains('capture0.png')
        

        
        
        })
    })
})