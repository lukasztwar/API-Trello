const { test, expect } = require('@playwright/test')
const { AJX } = require('../PageObjects/ajaxPageObject')

test('delayed page check', async ({page}) => {

    const Ajax = AJX(page)

    await Ajax.visit()

    await Ajax.clickOnClickMe()

})