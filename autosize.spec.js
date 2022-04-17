/// <reference types="cypress"/>
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
  
    describe('test', () => {
      it('autosize', () => {
        cy.viewport(1440, 900);
        cy.visit('https://staging.groups.fitted.ng/');
         cy.viewport(1440, 900);
    cy.get("div[class='nav-right'] a[class='ani_btn ghost']").click();
        cy.get('input[placeholder="Enter your Email"]').type('ezenwathecla90@gmail.com');
        cy.get("#password").type('go@12345');
        cy.get('div.w-full.mx-auto.bg-white.authpages').click();
        cy.get('div.show > form > div.justify-center > button.outline-zero').click();
        
        cy.get('html').click();
        cy.get('a.measure_add > div > svg').click();
        cy.get("#proceed_btn").should("be.visible").click()
        cy.get("div[class='box_option bannered recomended'] button").click()
        cy.get('input[name="head"]').type('23');
        cy.get('input[name="waist_circum_preferred"]').type("40");
        cy.get('input[name="neck_circum_base"]').type('20');
        cy.get('form').click();
        cy.get('input[name="trouser_length_preferred"]').type('30');
        cy.get("button[type='submit']").click();
        cy.get('html').click();
        cy.get('input[name="height"]').type('140');
        cy.get('input[name="weight"]').type('58');
        cy.get('input[name="age"]').type('34');
        cy.get('input[name="show_size_us"]').type('43');
        cy.get('html').click();
        cy.get('button[type="submit"]').click();
        cy.get('html').click();
        cy.get('img[src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIMAAACFCAYAAAB4xEt7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABSJSURBVHgB7V3dblNXGt3+ie0kBRIEFFJEPEEzwIgRGam94KJqUFVa6EXLE1CeoPAEwBMMPMHAExQuWqpKFa6Qmgu4cFU6UAaoExVKwjSkSeP4J7bnW5uznX322cd2krPPj+0lLMfHIfY5Z+31re/bfzHWQ7h161bW+jHbaDRGYrHYiPw+HVukY4vWy8KpU6cKrIcQY12GL774YiSVSmUTicQU3dhxOpSlx6T1vGFY5MiDKPV6/Qd6ztOxfDcSpSvIQC1+Kh6Pf0I3aZJu1hTzBwX6vFytVvuOfs51AzkiSwYQgG7GWSLBp5B8FhCSySRbW1tjFjGuswgTI1JkQAh44403Pqebf57CwMjY2BgbGhpiMzMzbHV1lQUFfI+dO3ey58+fs4WFBRy6AWKcPn36BosQIkEGqADd/IsIAbjoExMT/OKDANPT07xlBo0DBw6ww4cP8+80OzvL5ubmWKlUKpDPuExKcY1FAKEmA9y/RYLP0PoOHjzIBgcHm+/fu3dPtMRQ4Pjx42zbtm3N11CKx48fR4YUoSSDRYJP6MdLu3fvHjl06JCNBAJ37twJNDyomJycZHv27HEcF6Qol8vXqtXq1UqlUjhz5swiCxkCIYNI/8h0ZckAZuUUELk/DCFaGEiAcOCGu3fvslevXrGw4N1339WSFgBpnzx5wubn54Xh1KWsi6Qi+aCIsiUy4KZmMplP6STeo8cUs3J5caJ0kjdxsnTDj1lFHtxsXvCBCx8YGOCySn+DG0E84zWO4/12wAUGIegCsqCBEIZHJwAZlpaW+PPy8jJ/yMd0RMH/o+tyzEqdJ6UMitc96P/d3Kph3TQZvvnmm8/p6RK5+xFII26iiJe4SX/++SdvBfJNJ+ln27dv562nk5vdCYImBM4DJBgfH2deoBVRcO327dvHn0VKi/PHdYZ32qo32TAZrHj+73Q6PXX06NGWMu4nJLPG/ABuBhqBamqDhLgG5EmufPDBBxfYBrEhMoAIJPm3ydlnkUZ51bq9BFqIyPdNEAPkBwmQ3YTx/KEU+XweipIvFosnNuI/OiaDIAK1hGynsTFoCJmFxCJs4UJ1mn3gRsPHiPBH4bApz2EHwgdCJ51z7uTJkyc6/X8dk4E8wm1K86aQPkUdghDi+dGjR7yl0/nx150a2DADhPj+++83FDLinfwSzKLwCN0AxHg8IPl4oNXjIY5HnQgAzuGdd95hpObnUcHt6P+0+wWEB/QFhNUjbAT1Yp3VijVWW6kxRv/q5To/PpGYYGyOseJckcXTcRZLxVhiOMESQwkWS0e3YxfERpZD9Y1/0ct/tvv9tncX5eDR0dGsrrIWdjTWGqz6vypbe7XGiYDX7VADSyTEh+KcGAO7B1hiW4JFDSADdeRNUqP+rF3K2ZYMKHKgYyhKqC3VWPlZmT9vFSARHtWXVa4aqbdSLLk9GRnFgJqDEE+fPj1LL6+1+t2WngFsoqpgNiy1hHbAzS8+KPKHF0RQgbBSelrifx9ka5TbK00YADJg5Fc779BSGTB6KArhQdykdgRAy4bUo1XHM3EWTznbAjwF/h73Fy5/D+9Xfq2wtZdrXCkQQsIMqAPSY+rHmaKXOdffa/VH0N8QdjJUXlRY5VnF1Q/g5kPWccM6kfbE9nVfgL9ZW65xz4EwoUKQEL5kcGIw1KHjzTffZIuLi++1+h3XMPHll1/yzpCwhgjcCC7XM2UtEUCCoSNDbOjvQyy1P7WpGxVLxlhyNMkyExk2PDnMMuMZri4qoCArP65oCRMWUBIA/zeJzkW333FVBsQY5N5hBCR89dFqMzWUARKk96dtLdwLgATxvXE2sHeAhwh4BhmNWoOrRL1SZ+m30ixsQJigcMGHDtDLvO53WoWJUBpHtL7yrFMN0IrTB9K+xG8oTXJ3kocnVQ1AlPpKnasJvlOYgPI6VSRRQtaSwTVMYMAJyrJhQvnXMm99KhGgBsNHh301clAK3PDMgYzjPXgMhLBO6hp+wlL6rNv7rmQQo43CAhABLVEFQgJ8QVDmbWDfAPcTqpdAKAsbIdC4rVFlWriSgdLKybCUn0XGoAItE6ld0AARBo8MsvhwuAlhNe5Rt/e1ZLh9+zYfh4gu26CxtrDGMwYZiMXIFMKU34MQ+E46QiC0hQGWMhxze19LhmKxmMVz0MrA8/hfnBcSF93rbMELxBIxLSHgIUqzwRNiU56BQsRI0GkliLD6YNUhsQgN6DwKK9wIUf2tysNdkBAJwbfffqv1DdqrilHMlI+yIAGPoNYRYBbDXvoFQIjBvw46TCXSziD7M6D06NYulUpa3+DWxLJBKgNakJq/p/amQmEWOwU3lX8btNUaUJgqPgrWUEIdkBzo3nNThsBqDLwTSMkccGHT4+Gr6rUDwll6zP69YSjLz8ssKLTyDVoyBFljUItKInOIKlCHgKrJgH9AB1gg36dFrcHNQAZSY0BoULuNUWKO8tAzAOVr1T+giBYEWtUaHGQIqsagCw8DuwYiYRjbAYYSWZAMkD6I7KJVrcFBhqBqDFAFXfbQLUBdJLnTfk15duGzmdyQZwiixqBTBRAh6uFBhdqTieyiMuevOrSqNTjIEESNQZc9RCmN7BQIFwNv2sMezKSf6tCq1qAzkL7WGKAKjppCFxJBILUvFQp10NUadMrga41BpwrdYBrdsBF1wEIkWODDa7j5BgcZvKwxYL4fTgaLcOkAVVBTyW5WBYFO1UGs9oLlijCz3Cu41RocKcNWawwvX75kv//+O5/1bC06kacYpS1/gghyBtHtqiAg1EFWRaiDOnYSjYka582VlZUb9+/fv/jw4UM+FBGNFQNcNzss0a3WYLvrqDFUKpUt1RjoC4PRN+gkviNi5er1+iK9/kX3u466wt7uJ4IA1KE6tx4eoA6oSspT+KpV7qVeWdPirmESzIsXL6bm5+c/GRsbm9wsGdxqDTYyoMYAVdhqjYEIcJVOIIefLYJxlst/V1UF/iVHe4cMUIfkriSrvlg3z6hKyqV3hAlqVDPitXVNc0QKvNz02ggdeQYTNYYTJ07wlUMsljeBiScyUG3strpCO6jkRwORjaSpxU7dag02MpiqMWD1MvXEVOM4sKd3VEEAVUnHIBipkVjXrMA8hlutQc0mjNQYsISdvHwOnyKvGMcoTnf3AskRe0jGtZFBam1kTUhdrUFVBiM1BiJDQVYG9YR7lQiAmj3JoQINCAacGYDON9jIYGocA8KE7Bn6IWIdXBWVwb0iVJgkg67WoBpII+MY6IT+EMqgqy30sjIA6vnLjSWTyRhZD1lXa2iSQYxjMLHApawMa0v9EKECSwbIABmEx3r//fdnmAHoag1NMohxDCbIAAPZVAZluFcY5z/4DVwDtTxdXjA7EsryDLbp+U0yGB7HUBCrtap+QW0VvQo1q8AKMsxAWilgJQojcq1B9gxZk+MYUIVUicCX2euxQpMb1HpDqpJi0raKnkPnDW3fADfMEAq1Wk2wff3DQzwzym8kt9lvTmw1hvUUfN13Qg4Ti7hhJoD0CAZSVYa+X1gHlEH1DXtH9/7BfESTDKbyWf4hVhWtUVEW2Rjuk0GGOpx+T2aPr9vs+KXTWXSL82V65Q8f7IcJGfFt9uuRrCdHmY/w5W4kEomzQ3H7rChVFvtwKkO1Un2PGYKuR9QXMmDJ4V07dtmOoT+/DztUMiTqiZHp6ekpZgCiCCgXtYyTAaNzKI3J7kjvsB3vZxJOqNekUWogo5hiPsGPO8J3qYU7tn1wuk8GFeo1wTVLNPj+nv58PjMMbHOIJYcxFd32wX0yaOFYNW6t3nJVV08/W/q54PXusej8wvrTGMmrom8e9VArsul4Gj2XnzIfYLR5Un/EJDYuReeXunyNbkX3PpzXBWTAcETmA0zfkSkx7F4dCd3vk+gcVLQzlmLaPocZBLY91oWIPtyhNpIdQzv4avDMYwRRZ8hiRI2aSfRrDJ1D7KaHLR+Yh7DIYOuCkMkwhfjuFWAe6WkSYUK3AnwfeqjXBg0Jq8G7rdC2WVjD3vTjGbzegsir2Vm9BodqrrVf2XUzwH1BCCeFOCeONcng9RZEqDp6qTS9DISKVqvBbxbYqgh1IPGakwHxiDqTPN2CiExPNuhVZrsFIAMpd5Z5DGz3LG9VxMmAeOT16m4Yad1XBm+A8YpoXMxjWOZUbFX0mgwoahgYDJs1MdK626FmXpgnbzUqIyVp2ZwKz3DM6xtHH7Cjbx43Dkfmhan7r6+jETJABESFUyiD59PqECbEvE1H54tm17k+2sNEh5UlAnx8gbhLk2HbnKxX4SjQUd1BqDb5uh3MY1jm9LUyWMUhZjq+O/rqI7KPtN9Qr4vpai3vRCQVx89x6lnkP/gd3+u1fqjQwTEIKGO2x0D2I/ikrB9EcAzp6iuDHurUFcOzCVQyMD/8gip3YdsANCxQzbVf4z5gTn0bYaJ2zapT7fp4HSJsG69QA4KBFN3NS0tLns+wks2pMTKoq7U4xjyaWcgs0sAe2jJimdcNSFzHM2fOGJ17GcdUfGYA8motQGJIWZ1kua8MKhzm0QoR1nIGxifhxummmRp5axtgK1gu0C88OaGuaiObblLaAjMMo2FCVgbEv36toTXU6QRiYrLVqMwrAzMEMHl5edn+YUp6qbaEXodKBmG6rVXfCswwjJGBVKGgLhHczyjcAfOoZhLCZ6FRyWtIm4IxMlDXKF8IVPYNjlXN+iayiXpFqS9Iy/rgOpLRzzPDMEYGawFxW6hQV2pRW0Mvo9Wquda+HQVmGKaLTnlbRgHpG+6nmDo4VsHb8VpF0ZigDB9//HF0lQHABiTYZ8n2gdv6JlIF0mxHGXpwvcZAZjzHfIBpMuQXFhZsxxx7LLzqK4Nu4TMxfwLXjzKJH5gPMEqGTCaTV02kunwP37Ssx7MKdSOW5Oi60YaydoUywESSOuTm5+ebx3jxSa03vOrdUKHbwU+oJxoRzCMpg3G/ABjvtdT5Bpn5QC+TwbFq7vD6qrmWKuRPnTpVYD7Ajy7sHOKeXJpWN9xAitmrWUWrEAFFJVX4jvkE42TAjmu1Wm0RcifAU0x1w42FKus1aDd53bU+Cw2NiJT1BvMJvgxuIXZfV3dsdWzo+XKt5wpQ6r6ePIuwQgQ2i0WhSWwJ6Qf8WgfyBiRPDhW6tZJVyex2OIzjrvXwOTc3h+uWYz7CFzKA3dgG+dmzZ81jug3Ce8lIVl9WXbd+RhYBJSUyXGY+wrcxkBQqbsopJoAtgGWgpfSKkXSECKkvQtQW/MoiBHwjAxWgriwS5IqkzkhiC+Buh6oKQHr/uod68uQJI9N9nfkM38iAAlQnRrIX1MGxIby09TOuD4WJgrUZuq/wdTFGioFXrJNtHoMy9JI6tFOF2dlZhFRfvYKAr2RADIRDhgzK0KkDLlo3opUqIJ2kekyBfsyxAOD7Mq3xePyCTh2SO+0l6vJMuevqDlC8Vqrw8OFDPF332zgK+E6GkydP5uEdfv75Z9vx9IG0c2/H590TLkACVRVSe1MOr/Dhhx9eYgHBdzIAlFmcJ0m0ZRY8z1bqDtXfql1jJlcf2Bdpx/mCDACKcQidQXmF5ndiAQCZBaVOV3/66SfbcdQd1LkVpSelyIcLXXhIvbWuCjMzM4FlEDICIQNAJ36JLkBeNpOoO2Qm7CvE4SJGOVzowgNMo1xttFThBAsYgZEBoAtwARdCHUEt5FMA4aLywtgGrMYAIujCg2wa7927h6fLQZlGGdzCg5137txhXmAjG5igz+Lrr7++ms/nPz9+/Hhz9ZjU/hTvp5ClFdkF5l1EaW+r1UerLcMDGsJmTSNK+17dMwFc/RwkamVlhXmFUqnU8TCtjz766DwR4tjjx4+nDh8+zI8hXAweGWTF+0WbXyj+p8iG/zEcib0qSjMlx3Q5KIIID8genj59urjJ8HCtUqnkvNyuGrvYheKq3rp1K0v1h9uHDh3Kjo+vL5GMwlPpacn2u5DZoSNDoSYEDKPqE6BoIDIA9Zyensbe4+eCNo0yQqG5iJfUQs6h9iCnm2hFanUSslt8UAztDG4tEUDgv73e5BVEgE+gdPJymIgAhCYAW8PjLpB/sPkO+AfVUIaVEAgNWiJYSoZ6gnV+N4IsLrkhVG7s9OnTV0g6L6PlyIRIj6edg2iJECs/roRiQAx8zep/V1n1hb0/RQ1p9+/fR+aULxaL51gIEcrASx7i0vDw8MW3337btlgp/IOuAwvqoYYTvwCTqMsaVEVAvwOZRhDhhOm1mTaL0LowN0JUfq2w8jNnEQr1icGJQV+NJWofCAtqhVQlwt27d4UihJYIQKhzNBAilUpdPHr0KJN3yXEjBOCHSqCLXZc6AsgaYBZBBGEWiQQ5+vlMmIkAhD5h/+qrr85TMerixMTEyMGDB5vH+Q2hsKFbKIx3AlFxBxNSvNwcDZ8JEqqjmgVgdHlRiT4T4xjhEYgIV1FLYRFAJLaRE3UIUocs1SKaYUPU/d0GwoAUCB8wn/KA040AIQBD+GFU3UiAm5/5S6Y5JgOjleARGo3GBSLCFRYRRGZPQRCCnuAjzkIhxsbGmu+BDCBFq+UEQQxIOB9mN5zgayyq/oLHfrrfa8t041dqPAy4EUAAnU7IdkAIhAX0xFKtpBCLxc5g7AaLECK3wSSR4jNSiYtEhixIIasEZmW5eQmvAaVBeRnkgklENzT6GkgNrhIpLoXdH+gQyd1GhUoQKc5CIXSkgLSbWHhURwI8qtVqDpNe/JwO5zUivfVsK1IAiPPisZUBMiAAekwH9g40F/buJhIIdMU+xDIpsDcniIHdXGVi8PkYxRp/hmI0Kg3ttsxiMRH4CXiL5EiySQCMu0AowIzybiKBQFdtSm2RYorM21ns4ItN2EAKEAQ/b2TrJXHz8cDYAbH8Hgbz0uOGH6uv+Y2u3aFcEAMPUoxj9DyJwTPYzBXP2HAlkUjwZ6xkS51k/P9ZN51nBlj/GvM8sPoM/Y1c1LKDjaJntqvHTiuZTGYSWypg91hs0oUH9t/E+9JyvAXxCMNQND/xfxXxOpxT1EXKAAAAAElFTkSuQmCC"]').click();
        cy.get('input[value="fitted"]').click();
        cy.get('html').click();
        cy.get("button[type='submit']").click();
        cy.get('html').click();
        cy.get('input[name="name"]').type('mymeasure');
        cy.get('html').click();
        cy.get('div.toggle--floor').click();
        cy.get('html').click();
        cy.get('input[name="can-edit"]').click();
        cy.get('input[id="agree-to-terms"]').click();
        cy.get('html', ).click();
        cy.get('label > svg > path:nth-child(1)').click();
        cy.get('html').click();
        cy.get('html').click();
        cy.get('input[name="top"]').click();
        cy.get('html').click();
        cy.get(".save_btn.ml-auto").should("be.visible").click();
        cy.on("window:alert",(t)=>{
            expect(t).to.contains("added successsfully")
        

        
    
            
          })
        })
    })
        
    