import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on Insurance home page", () => {
    cy.visit("https://demo.guru99.com/insurance/v1/register.php");
});

When("I type email and password submit the form", () => {
    cy.get("#email").type('parameswaribala@gmail.com');
    cy.get("#password").type('Test@123');
});

Then("I should be redirected to the home page", () => {
    cy.visit("https://www.google.com")
});
