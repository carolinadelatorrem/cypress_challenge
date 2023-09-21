import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

let url = Cypress.env('baseUrl');
 
When("I send a GET request for resources", () => {
    cy.request(url)
    .as('response');
 });

When("I send a POST request for resources", () => {
    cy.request({
        method: 'POST',
        url: url,
        body: {
            "season": url+"/seasons/"
        },
        failOnStatusCode: false
    })
    .as('response');
});

When("I send a GET request for characters second page", () => {
    queryParam = '?page=2'
    cy.getReqWithPath(url,'character', queryParam,'positive')
    .as('response');
});

When("I send a GET request for characters invalid page", () => {
    queryParam = '?page=45'
    cy.getReqWithPath(url,'character', queryParam,'negative')
    .as('response');
});

Then("the second page is returned", () => {
    cy.get('@response').should((response) => {
        expect(response.body['info']['prev']).to.include("page=1")
        expect(response.body['info']['next']).to.include("page=3")
    });
});