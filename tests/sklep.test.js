const { test, expect } = require('@playwright/test');
const { SCP } = require('./sklepPO')

test('test sklepu', async ({page}) => {

    const ShoppingCartPage = SCP(page)
    await ShoppingCartPage.visit()

    await ShoppingCartPage.goToTShirtsCategory();
    await ShoppingCartPage.selectTShirt();
    await ShoppingCartPage.addToCart()


})