@signup
Feature: Sign Up

  @signup_1
  Scenario: Successful Sign Up
    Given The user is on the demoblaze home page
    When The user clicks on the sign up button
    And The user fills in the sign up form with valid inputs and clicks the sign in button
    Then The user sees "Sign up successful."

  @signup_2
  Scenario: Failed Sign Up for already existing user
    Given The user is on the demoblaze home page
    When The user clicks on the sign up button
    And The user fills in the sign up form with an already existing username and clicks the sign in button
    Then The user sees "This user already exist."

  @signup_3
  Scenario: Failed Sign Up for missing credentials
    Given The user is on the demoblaze home page
    When The user clicks on the sign up button
    And The user does not fill the form and clicks the sign in button
    Then The user sees "Please fill out Username and Password."        

    