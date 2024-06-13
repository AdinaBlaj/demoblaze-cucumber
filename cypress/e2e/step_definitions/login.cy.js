import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const logIn = require("../../pages/login")


Given('The user logs in', () => {
    logIn.clickNavLogIn()
    logIn.logIn('admin','admin')
    cy.wait(4000)
});


When('The user clicks on log in button', () => {
    logIn.clickNavLogIn()
  });


When('The user clicks on log out button', () => {
    logIn.clickNavLogOut()
  });


When('The user fills the log in form with the admin credentials', () => {
    logIn.logIn('admin','admin')
    cy.wait(4000)
  });  


When('The user does not fill the form and clicks the log in button', () => {
    logIn.clickLogInBtn()
  });


When('The user fills in the log in form with and invalid password', () => {
    const username = 'admin';
    const randomPassword = Math.floor(1000000000 + Math.random() * 9000000000);
    logIn.logIn(username, randomPassword)
  });  
 
When('The user fills in the log in form with and invalid credentials', () => {
    const randomUsername = Math.floor(1000000000 + Math.random() * 9000000000);
    const randomPassword = Math.floor(1000000000 + Math.random() * 9000000000);
    logIn.logIn(randomUsername, randomPassword)
  });    


Then('The user is logged',() => {
    logIn.getWelcomeUser().should('be.visible');
    logIn.getWelcomeUser().should('contain.text', 'Welcome');
  });  


Then('The user is logged out',() => {
    logIn.getWelcomeUser().should('not.be.visible')


  });  
