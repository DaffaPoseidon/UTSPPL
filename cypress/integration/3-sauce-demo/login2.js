context ('Saucedemo Login Test', () =>{
    it('Login Saucedemo', () =>{
        cy.visit('https://saucedemo.com')
        cy.get('[id="user-name"]').type('locked_out_user')
        cy.get('input[type="password"]').type('secret_sauce')
        cy.get('[id="login-button"]').click()
    })
})