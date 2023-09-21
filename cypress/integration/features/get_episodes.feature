Feature: Get Episodes

As a user, I should be able to get Rick and Morty episodes.

Scenario: Get all episodes
    When I send a GET request for all episodes
    Then the response will return status 200
    And the response is JSON formatted
    And the headers correspond with basic request
    And all the episodes are returned

Scenario: Get valid episode
    When I send a GET request for valid episode
    Then the response will return status 200
    And the response is JSON formatted
    And the headers correspond with basic request
    And requested episode is returned

Scenario: Get invalid episode
    When I send a GET request for invalid episode
    Then the response will return status 404
    And the response is JSON formatted
    And the headers correspond with basic request
    And episode error is returned

Scenario: Get valid episode array
    When I send a GET request for valid episode array
    Then the response will return status 200
    And the response is an array
    And the headers correspond with basic request
    And episode list is returned

Scenario: Get episodes using invalid filter
    When I send a GET request for invalid episode filter
    Then the response will return status 404
    And the response is JSON formatted
    And the headers correspond with basic request
    And episode error is returned

Scenario: Get episodes using valid name filter
    When I send a GET request for episodes using valid name filter
    Then the response will return status 200
    And the response is JSON formatted
    And the headers correspond with basic request
    And episode results are returned 

Scenario: Get episodes using invalid name filter
    When I send a GET request for episodes using invalid name filter
    Then the response will return status 404
    And the response is JSON formatted
    And the headers correspond with basic request
    And the response should be an error message