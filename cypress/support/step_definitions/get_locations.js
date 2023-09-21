import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

let url = Cypress.env('baseUrl');

When("I send a GET request for all locations", () => {
    cy.request(url+"location")
    .as('response');
});

When("I send a GET request for valid location", () => {
    let path = '10';
    cy.getReqWithPath(url,'location',path,'positive')
    .as('response');
});

When("I send a GET request for invalid location", () => {
    let locationId = '9999';
    cy.getReqWithPath(url,'location', locationId,'negative')
    .as('response');
});

When("I send a GET request for valid location array", () => {
    let locationArray = '[1,2,3]';
    cy.getReqWithPath(url,'location',locationArray,'positive')
    .as('response')
});

When("I send a GET request for locations using valid name filter", () => {
    let queryParam = '?name=Krootabulon';
    cy.getReqWithPath(url,'location',queryParam,'positive')
    .as('response');
});

When("I send a GET request for locations using valid type filter", () => {
    let queryParam = '?type=Planet';
    cy.getReqWithPath(url,'location',queryParam,'positive')
    .as('response');
});

When("I send a GET request for locations using valid dimension filter", () => {
    let queryParam = '?dimension=unknown';
    cy.getReqWithPath(url,'location',queryParam,'positive')
    .as('response');
});

When("I send a GET request for invalid location filter", () => {
    let queryParam = '?size=20ft2';
    cy.getReqWithPath(url,'location',queryParam,'negative')
    .as('response');
});

When("I send a GET request for locations using invalid name filter", () => {
    let queryParam = '?name=ChapterTwo';
    cy.getReqWithPath(url,'location',queryParam,'negative')
    .as('response');
});

When("I send a GET request for locations using invalid type filter", () => {
    let queryParam = '?type=Hotel';
    cy.getReqWithPath(url,'location',queryParam,'negative')
    .as('response');
});

When("I send a GET request for locations using invalid dimension filter", () => {
    let queryParam = '?dimension=Mars';
    cy.getReqWithPath(url,'location',queryParam,'negative')
    .as('response');
});

Then("all the locations are returned", () => {
    cy.checkAllRequested();
});

Then("requested location is returned", () => {
    cy.get('@response').should((response) => {
        expect(response.body['id']).to.eql(10);
        expect(response.body).to.have.property('name')
        expect(response.body).to.have.property('type')
        expect(response.body).to.have.property('dimension')
        expect(response.body).to.have.property('residents')
        expect(response.body).to.have.property('url')
        expect(response.body).to.have.property('created')
    });
});

Then("location error is returned", () => {
    cy.get('@response').should((response) => {
        expect(response.body).to.have.property('error')
        expect(response.body['error']).to.include("Location not found")
    });
});

Then("location list is returned", () => {
    cy.listIsReturned();
});

Then("location results are returned", () => {
    cy.allResultsReturned();
});