class ProductPage {

    openCart() {
        cy.fixture("productPageLocators.json").then((locator)=>{
            cy.get(locator.goToCartButton)
            .click()
        })
    }

}

export default new ProductPage();