import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

let url = Cypress.env('baseUrl');

Then("the response will return status {int}", (statusCode) => {
    cy.get('@response').should((response) => {
        expect(response.status).to.eq(statusCode);
    })
});

Then("the response is JSON formatted", () => {
    cy.get('@response').should((response) => {
        expect(response.body).to.not.be.null;
        expect(response.body).to.be.an('object');
    })
});

Then("the response is an array", () => {
    cy.get('@response').should((response) => {
        expect(response.body).to.not.be.null;
        expect(response.body).to.be.an('array');
    })
});

Then("the headers correspond with basic request", () => {
    cy.get('@response').should((response) => {
        expect(response.headers).to.have.property('content-type');
        expect(response.headers).to.have.property('date');
        expect(response.headers).to.have.property('server');
    })
    cy.get('@response')
    .its('headers')
    .its('content-type')
    .should('include', 'application/json; charset=utf-8');
});

Then("the requested resources are returned", () => {
    cy.get('@response').should((response) => {
        expect(response.body).to.have.property('characters');
        expect(response.body['characters']).to.eq(url+"character");
        expect(response.body).to.have.property('locations');
        expect(response.body['locations']).to.eq(url+"location");
        expect(response.body).to.have.property('episodes');
        expect(response.body['episodes']).to.eq(url+"episode");
    })
});

Then("the response should be an error message", () => {
    cy.get('@response').should((response) => {
        expect(response.body).to.have.property('error');
        expect(response.body['error']).to.include("There is nothing here");
    })
});