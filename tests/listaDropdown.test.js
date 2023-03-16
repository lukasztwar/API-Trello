const { test, expect } = require('@playwright/test');
const { DDP } = require('../PageObjects/dropdownPageObject')

//Parameters
const dropdownMenu1 = '[id="dropdowm-menu-1"]'
const dropdownMenu2 = '[id="dropdowm-menu-2"]'
const dropdownMenu3 = '[id="dropdowm-menu-3"]'

const dropdownMenu11 = 'java'
const dropdownMenu12 = 'c#'
const dropdownMenu13 = 'python'
const dropdownMenu14 = 'sql'

const dropdownMenu21 = 'eclipse'
const dropdownMenu22 = 'maven'
const dropdownMenu23 = 'testng'
const dropdownMenu24 = 'junit'

const dropdownMenu31 = 'html'
const dropdownMenu32 = 'css'
const dropdownMenu33 = 'javascript'
const dropdownMenu34 = 'jquery'


test('fill dropdown list', async ({page}) => {
    const DropdownPage = DDP(page)
    await DropdownPage.visit()

    await DropdownPage.selectFromDropdown(dropdownMenu1, dropdownMenu11)
    await DropdownPage.selectFromDropdown(dropdownMenu1, dropdownMenu12)
    await DropdownPage.selectFromDropdown(dropdownMenu1, dropdownMenu13)
    await DropdownPage.selectFromDropdown(dropdownMenu1, dropdownMenu14)

    await DropdownPage.selectFromDropdown(dropdownMenu2, dropdownMenu21)
    await DropdownPage.selectFromDropdown(dropdownMenu2, dropdownMenu22)
    await DropdownPage.selectFromDropdown(dropdownMenu2, dropdownMenu23)
    await DropdownPage.selectFromDropdown(dropdownMenu2, dropdownMenu24)

    await DropdownPage.selectFromDropdown(dropdownMenu3, dropdownMenu31)
    await DropdownPage.selectFromDropdown(dropdownMenu3, dropdownMenu32)
    await DropdownPage.selectFromDropdown(dropdownMenu3, dropdownMenu33)
    await DropdownPage.selectFromDropdown(dropdownMenu3, dropdownMenu34)

})