const { test, expect } = require('@playwright/test');
const { CBX } = require('../PageObjects//checkboxPageObject')

test('radio buttons check', async ({page}) => {

    const Checkbox = CBX(page)
    await Checkbox.visit()

    await Checkbox.checkGreenColor()
    await Checkbox.verifyOtherThanGreenColor()

    await Checkbox.checkBlueColor()
    await Checkbox.verifyOtherThanBlueColor()

    await Checkbox.checkOrangeColor()
    await Checkbox.verifyOtherThanOrangeColor()

    await Checkbox.checkPurpleColor()
    await Checkbox.verifyOtherThanPurpleColor()

    await Checkbox.checkYellowColor()
    await Checkbox.verifyOtherThanYellowColor()
    
})