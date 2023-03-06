const { test, expect, selectOption } = require('@playwright/test');

class ShoppingCartPage {

    url = 'https://automationteststore.com/'
    category = 'Apparel & accessories'
    Tshirts = 'T-shirts'
    TshirtName = 'Designer Men Casual Formal Double Cuffs Grandad Band Collar Shirt Elegant Tie'
    Cart = ' Add to Cart'
    
    Shoes = 'Shoes'
    CartIcon = '[class="fa fa-cart-plus fa-fw"]'
    size = '[id="option344747"]'
    search = '[placeholder="Search Keywords"]'
    Go = '[title="Go"]'
    itemToSearch = 'ck one shock for him Deodorant'
    manualShoe = 'New Ladies High Wedge Heel Toe Thong Diamante Flip Flop Sandals'
    openCart = '[class="table table-striped table-bordered"]'
    totalAmount = '[class="bold totalamout"]'
    Amount = '$74.00'
    checkout = '[title="Checkout"]'
    checkOut = '[id="checkout_btn"]'
    guest = '[id="accountFrm_accountguest"]'
    continue = '[title="Continue"]'
    firstname = '[name="firstname"]'
    lastname = 'input[name="lastname"]'
    address = '[name="address_1"]'
    city = 'input[name="city"]'
    country = 'select[name="country_id"]'
    zone = 'select[name="zone_id"]'
    email = '[id="guestFrm_email"]'
    pcode = '[name="postcode"]'
    maintext = '[class="maintext"]'


    constructor(page) {
        this.page = page
    }

    async visit() {
        await this.page.goto(this.url)
    }

    async goToTShirtsCategory() {
        await this.page.getByRole('link', { name: this.category }).click();
        await this.page.getByRole('link', { name: this.Tshirts, exact: true }).click();
    }
        
    async selectTShirt() {
        await this.page.getByRole('link', { name: this.TshirtName }).click();
    }
        
    async addToCart() {
        await this.page.getByRole('link', { name: this.Cart }).click();
    }



}



const SCP = (page) => new ShoppingCartPage(page)

module.exports = { SCP }