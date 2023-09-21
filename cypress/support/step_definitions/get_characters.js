import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

let url = Cypress.env('baseUrl');

When("I send a GET request for all characters", () => {
    cy.request(url+"character")
    .as('response');
});

When("I send a GET request for valid character", () => {
    let path = '10';
    cy.getReqWithPath(url,'character',path,'positive')
    .as('response');
});

When("I send a GET request for invalid character", () => {
    let characterId = '999';
    cy.getReqWithPath(url,'character', characterId,'negative')
    .as('response');
});

When("I send a GET request for valid character array", () => {
    let characterArray = '[1,2,3]';
    cy.getReqWithPath(url,'character',characterArray,'positive')
    .as('response')
});

When("I send a GET request for valid name filter", () => {
    let queryParam = '?name=roy';
    cy.getReqWithPath(url,'character',queryParam,'positive')
    .as('response');
});

When("I send a GET request for valid status filter", () => {
    let queryParam = '?status=alive';
    cy.getReqWithPath(url,'character',queryParam,'positive')
    .as('response');
});

When("I send a GET request for valid species filter", () => {
    let queryParam = '?species=Human';
    cy.getReqWithPath(url,'character',queryParam,'positive')
    .as('response');
});

When("I send a GET request for valid gender filter", () => {
    let queryParam = '?gender=female';
    cy.getReqWithPath(url,'character',queryParam,'positive')
    .as('response');
});

When("I send a GET request for chained filters", () => {
    let queryParam = '?name=rick&status=alive&page=2';
    cy.getReqWithPath(url,'character',queryParam,'positive')
    .as('response');
});

When("I send a GET request for invalid filter", () => {
    let queryParam = '?dob=05/29/1993';
    cy.getReqWithPath(url,'character',queryParam,'negative')
    .as('response');
});

When("I send a GET request for invalid name filter", () => {
    let queryParam = '?name=rocio';
    cy.getReqWithPath(url,'character',queryParam,'negative')
    .as('response');
});

Then("all the characters are returned", () => {
    cy.checkAllRequested();
});

Then("requested character is returned", () => {
    cy.get('@response').should((response) => {
        expect(response.body['id']).to.eql(10);
        expect(response.body).to.have.property('name')
        expect(response.body).to.have.property('status')
        expect(response.body).to.have.property('species')
        expect(response.body).to.have.property('type')
        expect(response.body).to.have.property('gender')
        expect(response.body).to.have.property('origin')
    });
});

Then("character error is returned", () => {
    cy.get('@response').should((response) => {
        expect(response.body).to.have.property('error')
        expect(response.body['error']).to.include("Character not found")
    });
});

Then("character list is returned", () => {
    cy.listIsReturned();
});

Then("character results are returned", () => {
    cy.allResultsReturned();
});