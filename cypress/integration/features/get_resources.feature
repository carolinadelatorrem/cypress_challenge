Feature: Get Resources

As a user, I should be able to get API resources.

Scenario: Get resources
    When I send a GET request for resources
    Then the response will return status 200
    And the response is JSON formatted
    And the headers correspond with basic request
    And the requested resources are returned

Scenario: Post a resource
    When I send a POST request for resources
    Then the response will return status 404
    And the response is JSON formatted
    And the headers correspond with basic request
    And the response should be an error message

Scenario: Get second page of a resource
    When I send a GET request for characters second page
    Then the response will return status 200
    And the response is JSON formatted
    And the headers correspond with basic request
    And the second page is returned

Scenario: Get invalid page
    When I send a GET request for characters invalid page
    Then the response will return status 404
    And the response is JSON formatted
    And the headers correspond with basic request
    And the response should be an error message