import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import Navigate from '../pages/navigate'
import HomePage from '../pages/home'
import CartPage from '../pages/cart'
import ProductPage from '../pages/product'

let zipcode;

Given("I go to the Website", () => {
    Navigate.navigateToUrl();
});

Given("I set my zipcode to {int}", (zipcode_int) => {
    zipcode = zipcode_int.toString();
    HomePage.setZipcode(zipcode);
});

When("I search for {string}", (productName) => {
    HomePage.searchProduct(productName);
});

When("I add to the Cart the first product sorted by high to low", () => {
    HomePage.sortByHighToLow();
    HomePage.openFirstAndAddToCart();
});

When("I add to the Cart the first product sorted by low to high", () => {
    HomePage.sortByLowToHigh();
    HomePage.openFirstAndAddToCart();
});

When("I add to the Cart the product in the middle",  () => {
    HomePage.openMiddleAndAddToCart();
});

When("I go to the Cart",  () => {
    ProductPage.openCart();
});
        
When("I increase the quantity of the more expensive product", () => {
    CartPage.increaseQuantity();
});
        
When("I remove the less expensive product", () => {  
    CartPage.deleteCheapestProduct();
});
        
When("I save for later the middle product", () => {
    CartPage.saveForLaterMiddleProduct();
});
            
Then("I should get my cart updated", () => {
    CartPage.scrollToTheTop(); 
    // Assert the current zipcode is the set zipcode
    CartPage.validateZipcode(zipcode);
    // Assert that it should only be one product in the Cart
    CartPage.validateProductsInCart(1);
    // Assert the product in the Cart should have quantity 2
    CartPage.validateCartQuantity(2);
    // Assert there should be only one product in Save for Later
    CartPage.validateProductsInSaveForLater(1);
});

