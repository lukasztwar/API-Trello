const { test, expect } = require('@playwright/test');

class Ajax {

    url = 'https://webdriveruniversity.com/Ajax-Loader/index.html'
    buttonClickMe = '[class="btn btn-default btn-lg dropdown-toggle"]'
    headerWellDone = '[class="modal-header"]'

    constructor(page) {
        this.page = page
    }
  
    async visit() {
        await this.page.goto(this.url)
    }

    async clickOnClickMe() {
        
        await this.page.click(this.buttonClickMe);
        await this.page.waitForSelector(this.headerWellDone);
        const headerText = await this.page.textContent(this.headerWellDone);
        expect(headerText).toContain('Well ');
    }

}

const AJX = (page) => new Ajax(page)

module.exports = { AJX }