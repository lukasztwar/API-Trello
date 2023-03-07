const { test, expect, moment } = require('@playwright/test');
const { DTP } = require('../PageObjects/datepickerPageObject')

test('datepicker check', async ({page}) => {

    const datepicker = DTP(page)
    const date = {
        day: '23',
        month: 'Dec',
        year: '2028',
        
    }
    await datepicker.visit()

    
    await datepicker.selectDate(date)

    
    await datepicker.check(date)

})