const { test, expect } = require('@playwright/test');
const { ACP } = require('../PageObjects/autoCompletePageObject')

//Parameters
const textFieldShortcut = 'chi'
const textFieldHint = 'Chips'


test('Autocompltete', async ({page}) => {
    const AutoCompletePage = ACP(page)
    await AutoCompletePage.visit()
    await AutoCompletePage.typeInputInTextField(textFieldShortcut)
    await AutoCompletePage.selectFromAutocompleteList(textFieldHint)

    //Check
    const value = await page.$eval('#myInput', (input) => input.value)
    expect(value).toBe(textFieldHint)
})



