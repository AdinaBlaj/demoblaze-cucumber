import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const signUp = require("../../pages/signup")

Given('The user is on the demoblaze home page', () => {
    cy.visit('/')
  });
  
When('The user clicks on the sign up button', () => {
    signUp.clickNavSignUp()
  });
  
When('The user fills in the sign up form with valid inputs and clicks the sign in button', () => {
    const randomUsername = Math.floor(1000000000 + Math.random() * 9000000000);
    const randomPassword = Math.floor(1000000000 + Math.random() * 9000000000);
    signUp.signUp(randomUsername, randomPassword)
  });

When('The user fills in the sign up form with an already existing username and clicks the sign in button', () => {
    const username = 'admin';
    const randomPassword = Math.floor(1000000000 + Math.random() * 9000000000);
    signUp.signUp(username, randomPassword)
  });

When('The user does not fill the form and clicks the sign in button', () => {
    signUp.clickSignUpBtn()
  });
  
Then('The user sees {string}', (expected) => {
    cy.on('window:alert', (text) => {
        expect(text).to.equal(expected)
    });
    cy.wait(4000)
  });