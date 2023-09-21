Feature: Get Characters

As a user, I should be able to get Rick and Morty characters.

Scenario: Get all characters
    When I send a GET request for all characters
    Then the response will return status 200
    And the response is JSON formatted
    And the headers correspond with basic request
    And all the characters are returned

Scenario: Get valid character
    When I send a GET request for valid character
    Then the response will return status 200
    And the response is JSON formatted
    And the headers correspond with basic request
    And requested character is returned

Scenario: Get invalid character
    When I send a GET request for invalid character
    Then the response will return status 404
    And the response is JSON formatted
    And the headers correspond with basic request
    And character error is returned

Scenario: Get valid character array
    When I send a GET request for valid character array
    Then the response will return status 200
    And the response is an array
    And the headers correspond with basic request
    And character list is returned

Scenario: Get characters using invalid filter
    When I send a GET request for invalid filter
    Then the response will return status 404
    And the response is JSON formatted
    And the headers correspond with basic request
    And character error is returned

Scenario: Get characters using valid name filter
    When I send a GET request for valid name filter 
    Then the response will return status 200
    And the response is JSON formatted
    And the headers correspond with basic request
    And character results are returned 

Scenario: Get characters using invalid name filter
    When I send a GET request for invalid name filter
    Then the response will return status 404
    And the response is JSON formatted
    And the headers correspond with basic request
    And the response should be an error message

Scenario: Get characters using valid status filter
    When I send a GET request for valid status filter
    Then the response will return status 200
    And the response is JSON formatted
    And the headers correspond with basic request
    And character results are returned

Scenario: Get characters using valid species filter
    When I send a GET request for valid species filter 
    Then the response will return status 200
    And the response is JSON formatted
    And the headers correspond with basic request
    And character results are returned

Scenario: Get characters using valid gender filter
    When I send a GET request for valid gender filter 
    Then the response will return status 200
    And the response is JSON formatted
    And the headers correspond with basic request
    And character results are returned

Scenario: Get characters using chained filters
    When I send a GET request for chained filters
    Then the response will return status 200
    And the response is JSON formatted
    And the headers correspond with basic request
    And character results are returned