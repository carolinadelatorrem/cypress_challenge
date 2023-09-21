import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

let url = Cypress.env('baseUrl');

When("I send a GET request for all episodes", () => {
    cy.request(url+"episode")
    .as('response');
});

When("I send a GET request for valid episode", () => {
    let path = '10';
    cy.getReqWithPath(url,'episode',path,'positive')
    .as('response');
});

When("I send a GET request for invalid episode", () => {
    let episodeId = '9999';
    cy.getReqWithPath(url,'episode', episodeId,'negative')
    .as('response');
});

When("I send a GET request for valid episode array", () => {
    let episodeArray = '[1,2,3]';
    cy.getReqWithPath(url,'episode',episodeArray,'positive')
    .as('response')
});

When("I send a GET request for episodes using valid name filter", () => {
    let queryParam = '?name=Mortynight Run';
    cy.getReqWithPath(url,'episode',queryParam,'positive')
    .as('response');
});

When("I send a GET request for invalid episode filter", () => {
    let queryParam = '?duration=20m';
    cy.getReqWithPath(url,'episode',queryParam,'negative')
    .as('response');
});

When("I send a GET request for episodes using invalid name filter", () => {
    let queryParam = '?name=ChapterTwo';
    cy.getReqWithPath(url,'episode',queryParam,'negative')
    .as('response');
});

Then("all the episodes are returned", () => {
    cy.checkAllRequested();
});

Then("requested episode is returned", () => {
    cy.get('@response').should((response) => {
        expect(response.body['id']).to.eql(10);
        expect(response.body).to.have.property('name')
        expect(response.body).to.have.property('air_date')
        expect(response.body).to.have.property('episode')
        expect(response.body).to.have.property('characters')
        expect(response.body).to.have.property('url')
        expect(response.body).to.have.property('created')
    });
});

Then("episode error is returned", () => {
    cy.get('@response').should((response) => {
        expect(response.body).to.have.property('error')
        expect(response.body['error']).to.include("Episode not found")
    });
});

Then("episode list is returned", () => {
    cy.listIsReturned();
});

Then("episode results are returned", () => {
    cy.allResultsReturned();
});