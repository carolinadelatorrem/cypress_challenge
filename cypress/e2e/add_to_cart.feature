Feature: Add to Amazon Cart

    As a user, I should be able to add items to my Amazon cart

    Background: Go to Website
    Given I go to the Website
    And I set my zipcode to 90001

    Scenario: Add items to cart
        When I search for "magnesium citrate"
        And I add to the Cart the first product sorted by high to low
        And I search for "hydro flask mouth bottle"
        And I add to the Cart the first product sorted by low to high
        And I search for "beis tote bag"
        And I add to the Cart the product in the middle
        And I go to the Cart
        And I increase the quantity of the more expensive product
        And I remove the less expensive product
        And I save for later the middle product
        Then I should get my cart updated