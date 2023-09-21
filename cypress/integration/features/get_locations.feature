Feature: Get Locations

As a user, I should be able to get Rick and Morty locations.

Scenario: Get all locations
    When I send a GET request for all locations
    Then the response will return status 200
    And the response is JSON formatted
    And the headers correspond with basic request
    And all the locations are returned

Scenario: Get valid location
    When I send a GET request for valid location
    Then the response will return status 200
    And the response is JSON formatted
    And the headers correspond with basic request
    And requested location is returned

Scenario: Get invalid location
    When I send a GET request for invalid location
    Then the response will return status 404
    And the response is JSON formatted
    And the headers correspond with basic request
    And location error is returned

Scenario: Get valid location array
    When I send a GET request for valid location array
    Then the response will return status 200
    And the response is an array
    And the headers correspond with basic request
    And location list is returned

Scenario: Get locations using valid name filter
    When I send a GET request for locations using valid name filter 
    Then the response will return status 200
    And the response is JSON formatted
    And the headers correspond with basic request
    And location results are returned 

Scenario: Get locations using invalid name filter
    When I send a GET request for locations using invalid name filter
    Then the response will return status 404
    And the response is JSON formatted
    And the headers correspond with basic request
    And the response should be an error message

Scenario: Get locations using valid type filter
    When I send a GET request for locations using valid name filter 
    Then the response will return status 200
    And the response is JSON formatted
    And the headers correspond with basic request
    And location results are returned 

Scenario: Get locations using invalid type filter
    When I send a GET request for locations using invalid name filter
    Then the response will return status 404
    And the response is JSON formatted
    And the headers correspond with basic request
    And the response should be an error message

Scenario: Get locations using valid dimension filter
    When I send a GET request for locations using valid name filter 
    Then the response will return status 200
    And the response is JSON formatted
    And the headers correspond with basic request
    And location results are returned 

Scenario: Get locations using invalid dimension filter
    When I send a GET request for locations using invalid name filter
    Then the response will return status 404
    And the response is JSON formatted
    And the headers correspond with basic request
    And the response should be an error message