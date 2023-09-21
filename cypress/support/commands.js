

Cypress.Commands.add("getReqWithPath", (url, req_resource, path, typeOfTest) => {
    let requestPath = path;
    if (typeOfTest == 'positive') {
        cy.request({
            url: url+req_resource+"/"+requestPath
        })
        .as('response');
      } else {
        cy.request({
            url: url+req_resource+"/"+requestPath,
            failOnStatusCode: false
        })
        .as('response');
    }
});

Cypress.Commands.add("checkAllRequested", () =>{
    cy.get('@response').should((response) => {
        expect(response.body).to.have.property('info')
        expect(response.body['info']).to.have.property('count')
        expect(response.body['info']).to.have.property('pages')
        expect(response.body['info']).to.have.property('next')
        expect(response.body['info']).to.have.property('prev')
        expect(response.body).to.have.property('results')
        expect(response.body['results']).to.have.lengthOf(20)
    });
});

Cypress.Commands.add("allResultsReturned", () =>{
    cy.get('@response').should((response) => {
        expect(response.body).to.have.property('info');
        expect(response.body['results']).to.have.lengthOf.at.least(1)
        expect(response.body['info']).to.have.property('count')
        expect(response.body['info']).to.have.property('pages')
        expect(response.body['info']).to.have.property('next')
        expect(response.body['info']).to.have.property('prev')
        });
});

Cypress.Commands.add("listIsReturned", () =>{
    cy.get('@response').should((response) => {
        expect(response.body).to.have.lengthOf(3)
        expect(response.body[0]['id']).to.eql(1)
        expect(response.body[1]['id']).to.eql(2)
        expect(response.body[2]['id']).to.eql(3)
    });
});

