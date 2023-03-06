const { test, expect } = require('@playwright/test');
const { CBX } = require('../PageObjects//checkboxPageO')

test('radio buttons check', async ({page}) => {

    const Checkbox = CBX(page)
    await Checkbox.visit()

    await Checkbox.checkGreen()
    await Checkbox.verifyOtherThanGreen()

    await Checkbox.checkBlue()
    await Checkbox.verifyOtherThanBlue()

    await Checkbox.checkOrange()
    await Checkbox.verifyOtherThanOrange()

    await Checkbox.checkPurple()
    await Checkbox.verifyOtherThanPurple()

    await Checkbox.checkYellow()
    await Checkbox.verifyOtherThanYellow()
    
})