/// <reference types="Cypress" />
 
describe('My Second Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
 
cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
cy.get('.search-keyword').type('ca')
cy.wait(2000)
//selenium get hit url in browser, cypress get acts like findElement of selenium
 
//Parent child chaining
cy.get('.products').as('productLocator')
cy.get('@productLocator').find('.product').each(($el, index, $list) => {
 
const textVeg=$el.find('h4.product-name').text()
if(textVeg.includes('Cashews'))
{
$el.find('button').click()
}
})
cy.get('.cart-icon > img').click()
 
         // // Get command is findElement command of selenium
        // cy.get('.product:visible').should('have.length', 4)
        // // parent child chaining
        // cy.get('products').as('productLocator')
        // cy.get('@productLocator').find('.product').should('have.length', 4)
        // cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click().then(function(){
        //     console.log('Test')
        // })
        // cy.get('.products').find('.product').each(($e1, index, $list) => {
        //     const vegText = $e1.find('h4.product-name').text()
        //     if(vegText.includes('Cashews')){
        //         cy.wrap($e1).find('button').click()
        //     }

        // })
        // cy.get('.brand').should('have.text', 'GREENKART')
        // cy.get('.brand').then(function(logoElement)
        // {
        //     cy.log(logoElement.text())
        // })
        // cy.get('.cart-icon > img').click()
        // cy.contains('PROCEED TO CHECKOUT').click()
        // cy.get('button').click()
 
 
//fixture
 
}  )
 
 
 
}  )