
    describe('test', () => {
        it('Login | Konga Online Shopping', () => {
          cy.viewport(1440, 900);
          
          cy.get('a[href="/category/laptops-5230"]').click();
      cy.get('html').click();
      cy.get('body', {iframe: 'iframe#preview-notification-frame'}).click();
      cy.get('(*[contains(text(), "HP Stream 11 Pro-")]/ancestor-or-self::*/FORM/DIV/BUTTON[@type="submit" and contains(@class, "_0a08a_3czMG")])[1]').click();
      cy.get('html').click();
      cy.get('a[descendant::text()="Proceed to Checkout"]').click();
      cy.get('input[placeholder="Enter Email Address OR Phone Number"]').type('olabanjotboy@gmail.com');
      cy.get('input[id="password"]').type('Olaitan07');
      cy.get('button[descendant::text()="Login"]').click();
          
        })
      })
      