class SignUp{
    elements = {
        navSignUp: ()=> cy.get("#signin2"),
        usernameInput: ()=> cy.get("#sign-username"),
        passwordInput: ()=> cy.get("#sign-password"),
        signUpBtn: ()=> cy.get('.btn:contains("Sign up")'),

    }
    

    typeUsername(username){
        this.elements.usernameInput().type(username, {delay:0})
    }

    typePassword(password){
        this.elements.passwordInput().type(password, {delay:0})
    }

    clickNavSignUp(){
        this.elements.navSignUp().click()
    }

    clickSignUpBtn(){
        this.elements.signUpBtn().click()
    }

    signUp(username, password) {
        this.typeUsername(username)
        this.typePassword(password)
        this.clickSignUpBtn()
    }


}

module.exports = new SignUp();