Feature: Insurance functionality

  Scenario: Access the Login Form
    Given I am on Insurance home page
    When I type email and password submit the form
    Then I should be redirected to the home page
