const { test, expect } = require('@playwright/test');
const { DDP } = require('../PageObjects/dropdownPageObject')



test('fill dropdown list', async ({page}) => {
    const DropdownPage = DDP(page)
    await DropdownPage.visit()

    const m1 = '[id="dropdowm-menu-1"]'
    const m2 = '[id="dropdowm-menu-2"]'
    const m3 = '[id="dropdowm-menu-3"]'

    await DropdownPage.selectFromDropdown(m1, 'java')
    await DropdownPage.selectFromDropdown(m1, 'c#')
    await DropdownPage.selectFromDropdown(m1, 'python')
    await DropdownPage.selectFromDropdown(m1, 'sql')

    await DropdownPage.selectFromDropdown(m2, 'eclipse')
    await DropdownPage.selectFromDropdown(m2, 'maven')
    await DropdownPage.selectFromDropdown(m2, 'testng')
    await DropdownPage.selectFromDropdown(m2, 'junit')

    await DropdownPage.selectFromDropdown(m3, 'html')
    await DropdownPage.selectFromDropdown(m3, 'css')
    await DropdownPage.selectFromDropdown(m3, 'javascript')
    await DropdownPage.selectFromDropdown(m3, 'jquery')

})