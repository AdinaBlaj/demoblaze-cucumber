@login
Feature: Log In


  @login_1
  Scenario: Admin user exists
    Given The user is on the demoblaze home page
    When The user clicks on log in button
    And The user fills the log in form with the admin credentials
    Then The user is logged


  @login_2
  Scenario: Failed log in for missing credentials
    Given The user is on the demoblaze home page
    When The user clicks on log in button
    And The user does not fill the form and clicks the log in button
    Then The user sees "Please fill out Username and Password."  


  @login_3
  Scenario: Failed log in for invalid password
    Given The user is on the demoblaze home page
    When The user clicks on log in button
    And The user fills in the log in form with and invalid password
    Then The user sees "Wrong password."


  @login_4
  Scenario: Failed log in for invalid credentials
    Given The user is on the demoblaze home page
    When The user clicks on log in button
    And The user fills in the log in form with and invalid credentials
    Then The user sees "User does not exist."


  @login_5
  Scenario: Validate log out
    Given The user is on the demoblaze home page
    And The user logs in
    When The user clicks on log out button
    Then The user is logged out  
