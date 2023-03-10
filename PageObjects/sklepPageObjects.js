const { test, expect, selectOption } = require('@playwright/test');

class ShoppingCartPage {

    url = 'https://automationteststore.com/'
    category = 'Apparel & accessories'
    Tshirts = 'T-shirts'
    TshirtName = 'Designer Men Casual Formal Double Cuffs Grandad Band Collar Shirt Elegant Tie'
    Cart = ' Add to Cart'
    Shoes = 'Shoes'
    ShoeSize = '3 UK'
    search = 'Search Keywords'
    Go = 'Go'
    locatorI = 'i'
    itemToSearch = 'ck one shock for him Deodorant'
    manualShoe = 'New Ladies High Wedge Heel Toe Thong Diamante Flip Flop Sandals'
    cartCheckout = '#cart_checkout1'
    guest = 'Guest Checkout'
    continue = ' Continue' 
    firstname = '#guestFrm_firstname'
    lastname = '#guestFrm_lastname'
    email = '#guestFrm_email'
    address = '#guestFrm_address_1'
    city = '#guestFrm_city'
    zone = '#guestFrm_zone_id'
    postcode = '#guestFrm_postcode'
    confirmLast = ' Confirm Order'
    continue1 = ' Continue'


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

    async goToShoesCategory() {
        await this.page.getByRole('link', { name: this.category }).click();
        await this.page.getByRole('link', { name: this.Shoes, exact: true }).click();
        await this.page.getByRole('link', { name: this.manualShoe }).click();
        await this.page.getByLabel(this.ShoeSize).check();
    }

    async searchForProduct(Keywords) {
        await this.page.getByPlaceholder(this.search).click();
        await this.page.getByPlaceholder(this.search).fill(Keywords);
        await this.page.getByTitle(this.Go).locator('i').click();
    }

    async cartCheck() {
        const element = await this.page.getByText('$74.00');
        const text = await element.textContent();
        expect(text).toContain('$74.00');
    }

    async checkoutAsGuest() {
        await this.page.locator(this.cartCheckout).click();
        await this.page.getByLabel(this.guest).check();
        await this.page.getByRole('button', { name: this.continue }).click();
        await this.page.locator(this.firstname).fill('Ludek');
        await this.page.locator(this.lastname).fill('Ludzikowy');
        await this.page.locator(this.email).fill('ludek@email.com');
        await this.page.locator(this.address).fill('Ziemska 1');
        await this.page.locator(this.city).fill('London');
        await this.page.locator(this.zone).selectOption('3547');
        await this.page.locator(this.postcode).fill('05-120');
        await this.page.getByRole('button', { name: this.continue1 }).click();
        await this.page.getByRole('button', { name: this.confirmLast }).click();

    }
}



const SCP = (page) => new ShoppingCartPage(page)

module.exports = { SCP }