class CartPage {

    increaseQuantity() {
        var pricesList = [];
        cy.fixture("cartLocators.json").then((locator) => {
            cy.get(locator.shoppingCartPricesTexts).each(($product) => {
            var price_str = Cypress.$($product).text();
            var numericString = price_str.replace(/[^\d.-]/g, '');
            var price = parseFloat(numericString);
            pricesList.push(price)
            })
            cy.log(pricesList)
            cy.get(locator.quantityDropdown).then(($btn) => {
                let highestIndex = 0;
                let highestAmount = pricesList[0];
                for (let i = 1; i < pricesList.length; i++) {
                    if (pricesList[i] > highestAmount) {
                    highestIndex = i;
                    highestAmount = pricesList[i];
                    }}
                cy.log(highestIndex);
                cy.wrap($btn[highestIndex])
                .click()
            })
            cy.get(locator.quantityTwoOption)
            .click()
        })
    }

    deleteCheapestProduct() {
        let lowestIndex;
        var pricesList = [];
        cy.fixture("cartLocators.json").then((locator) => {
            cy.get(locator.shoppingCartPricesTexts).each(($product) => {
                var price_str = Cypress.$($product).text();
                var numericString = price_str.replace(/[^\d.-]/g, '');
                var price = parseFloat(numericString);
                pricesList.push(price)
            })
            cy.log(pricesList)
            cy.get(locator.deleteButton).then(($btn) => {
                let lowestIndex = 0;
                let lowestAmount = pricesList[0];
                for (let i = 1; i < pricesList.length; i++) {
                    if (pricesList[i] < lowestAmount) {
                        lowestIndex = i;
                        lowestAmount = pricesList[i];
                    }}
                cy.log(lowestIndex)
                cy.wrap($btn[lowestIndex])
                .click()
            cy.get(locator.removedItemConfirmationMsg).then(($removed_msg) => {
                    cy.get($removed_msg[lowestIndex]).click()
            })
            })
            })
        }
    
    saveForLaterMiddleProduct() {
        cy.fixture("cartLocators.json").then((locator)=>{
            cy.get(locator.saveForLaterButton).then(($btn) => {
            cy.wrap($btn[0]).click()
        })})
    }

    scrollToTheTop() {
        cy.scrollTo('top')
    }

    validateZipcode(zipcode) {
        cy.fixture("cartLocators.json").then((locator)=>{
            cy.get(locator.deliverToText)
            .should('include.text', zipcode)
        })
    }

    validateProductsInCart(quantity) {
        cy.fixture("cartLocators.json").then((locator)=>{
            cy.get(locator.activeItemsList)
            .should('have.length', quantity)
        })
    }

    validateCartQuantity(quantity){
        cy.fixture("cartLocators.json").then((locator)=>{
            cy.get(locator.currentQuantityOnCartProduct)
            .should('have.text', quantity.toString())
        })
    }

    validateProductsInSaveForLater(quantity){
        cy.fixture("cartLocators.json").then((locator)=>{
            cy.get(locator.savedForLaterTitleText)
            .should('have.attr', 'data-saved-item-quantity', quantity.toString())
            cy.get(locator.savedForLaterList)
            .should('have.length', quantity)
        })
    }
}

export default new CartPage();