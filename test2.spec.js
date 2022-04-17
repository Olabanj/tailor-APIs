Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
describe('test', () => {
    it('google signup test', () => {
      cy.viewport(1440, 900);
      
      cy.visit('https://accounts.google.com/signup/v2/webcreateaccount?gmb=exp&biz=true&flowName=GlifWebSignIn&flowEntry=SignUp');
      cy.get('#firstName').type('lukman');
      cy.get('#lastName').type('olabanjo');
      cy.get('#username').type('lukmanolabanjo078');
      cy.get('[name="Passwd"]').type('Olaitan07');
      cy.get('[name="ConfirmPasswd"]').type('Olaitan07');
      cy.get('#i3').click();
      cy.get('html').click()
      cy.get("button[class='VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc qfvgSe qIypjc TrZEUc lw1w4b'] span[class='VfPpkd-vQzf8d']").click({force:true})
       cy.get("#phoneNumberId").type('08023456574');
       cy.get("button[class='VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc qfvgSe qIypjc TrZEUc lw1w4b'] span[class='VfPpkd-vQzf8d']").click();
      cy.get('#code').type('598018');
      cy.get("button[class='VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc qfvgSe qIypjc TrZEUc lw1w4b'] span[class='VfPpkd-vQzf8d']").click();
      cy.get('[type="email"]').type('olabanjotboy@gmail.com');
      cy.get('#phoneNumberId').type('08022628657');
      cy.get('#day').click();
      cy.get('#month').select('March');
      cy.get('#year').type('1996');
      cy.get('#day').type('07');
      cy.get('#gender').select('Male');
      cy.get('html').click();
      cy.get('div>div:nth-child(1)>div>div>button>div:nth-child(3)').click();
      cy.get('//span[normalize-space(.)="Yes, I’m in"]').click();
      cy.get('html').click();
      cy.get('//span[normalize-space(.)="I agree"]').click();
      
    })
  });