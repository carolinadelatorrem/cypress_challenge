class HomePage {

    setZipcode(zipcode) {
        cy.fixture("homeLocators.json").then((locator)=>{
            cy.get(locator.locationToasterBody)
            .should('be.visible')
            cy.get(locator.locationModal)
            .click()
            .get(locator.zipcodeInput)
            .type(zipcode)
            .get(locator.applyZipcodeButton)
            .click()
            .get(locator.continueButton)
            .click()
        })
    }

    searchProduct(productName) {
        cy.fixture("homeLocators.json").then((locator)=>{
            cy.get(locator.searchBarInput).as('productInput')
            .click()
            .get('@productInput')
            .type(productName+'{enter}')
        })
    }

    sortByHighToLow() {
        cy.fixture("homeLocators.json").then((locator)=>{
            cy.get(locator.sortByDropdown)
            //.wait(5000)
            .click()
            cy.get(locator.sortHighToLowOption)
            //.wait(3000)
            .click()
        })
    }

    sortByLowToHigh() {
        cy.fixture("homeLocators.json").then((locator)=>{
            cy.get(locator.sortByDropdown)
            .click()
            cy.wait(5000)
            cy.get(locator.sortLowToHighOption)
            .click()
        })
    }

    openFirstAndAddToCart() {
        cy.fixture("homeLocators.json").then((locator)=>{
            cy.get(locator.productTitles)
            .first()
            .scrollIntoView({offset: {top:150, left:0}})
            .click()
        })
        cy.fixture("productPageLocators.json").then((locator)=>{
            cy.get(locator.addToCartButton)
            .click()
        })
    }

    openMiddleAndAddToCart() {
        cy.fixture("homeLocators.json").then((locator)=>{
            cy.get(locator.productTitles).then(($elm) => {
                const el_count = Cypress.$($elm).length;
                cy.log(el_count)
                cy.scrollTo('center')
                cy.get($elm[Math.ceil(el_count / 2)])
                .click()
            })
        })
        cy.fixture("productPageLocators.json").then((locator)=>{
            cy.get(locator.addToCartButton)
            .click()
        })
    }
}

export default new HomePage();