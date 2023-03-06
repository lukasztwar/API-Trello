const { test, expect } = require('@playwright/test')
const { AJX } = require('../PageObjects/ajaxPageO')

test('delayed page check', async ({page}) => {

    const Ajax = AJX(page)

    await Ajax.visit()

    await Ajax.headClick()

})