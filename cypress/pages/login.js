class LogIn{
    elements = {
        navLogIn: ()=> cy.get("#login2"),
        usernameInput: ()=> cy.get("#loginusername"),
        passwordInput: ()=> cy.get("#loginpassword"),
        logInBtn: ()=> cy.get('.btn:contains("Log in")'),
        welcomeUser: ()=> cy.get('#nameofuser'),
        navLogOut: ()=> cy.get("#logout2"),


    }
   


    typeUsername(username){
        this.elements.usernameInput().type(username, {delay:0})
    }


    typePassword(password){
        this.elements.passwordInput().type(password, {delay:0})
    }


    clickNavLogOut(){
        this.elements.navLogOut().click()
    }


    clickNavLogIn(){
        this.elements.navLogIn().click()
    }


    clickLogInBtn(){
        this.elements.logInBtn().click()
    }


    logIn(username, password) {
        this.typeUsername(username)
        this.typePassword(password)
        this.clickLogInBtn()
    }


    getWelcomeUser(){
        return this.elements.welcomeUser()
    }




}
module.exports = new LogIn();