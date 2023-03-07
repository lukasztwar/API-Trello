const { test, expect } = require('@playwright/test');

class DropdownPage {

    url = 'https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html'

    constructor(page) {
        this.page = page
    }

    async visit() {
        await this.page.goto(this.url)
    }

    async selectFromDropdown(id, value) {
        await this.page.selectOption(id, value);
        const dropdownValue = await this.page.$eval(id, (el) => el.value);
        expect(dropdownValue).toBe(value);
        }

}

const DDP = (page) => new DropdownPage(page)

module.exports = { DDP, DropdownPage }