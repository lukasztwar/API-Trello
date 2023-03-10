const { test, expect } = require('@playwright/test');
const { SCP } = require('../PageObjects/sklepPageObjects')

test('dodanie koszulki', async ({page}) => {

    const ShoppingCartPage = SCP(page)
    await ShoppingCartPage.visit()

    await ShoppingCartPage.goToTShirtsCategory();
    await ShoppingCartPage.selectTShirt();
    await ShoppingCartPage.addToCart()

})

test('dodanie butów', async ({page}) => {

    const ShoppingCartPage = SCP(page)
    await ShoppingCartPage.visit()

    await ShoppingCartPage.goToShoesCategory()
    await ShoppingCartPage.addToCart()

})

test('dodanie kosmetyków przez wyszukiwarkę', async ({page}) => {

    const ShoppingCartPage = SCP(page)
    await ShoppingCartPage.visit()

    await ShoppingCartPage.searchForProduct('shock')
    await ShoppingCartPage.addToCart()

})

test('dodanie 3 produktów, sprawdzenie koszyka i zamówienie', async ({page}) => {

    const ShoppingCartPage = SCP(page)
    await ShoppingCartPage.visit()

    await ShoppingCartPage.goToTShirtsCategory();
    await ShoppingCartPage.selectTShirt();
    await ShoppingCartPage.addToCart()

    await ShoppingCartPage.goToShoesCategory()
    await ShoppingCartPage.addToCart()

    await ShoppingCartPage.searchForProduct('shock')
    await ShoppingCartPage.addToCart()

    await ShoppingCartPage.cartCheck()

    await ShoppingCartPage.checkoutAsGuest()


})