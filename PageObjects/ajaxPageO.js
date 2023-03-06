const { test, expect } = require('@playwright/test');

class Ajax {

    url = 'https://webdriveruniversity.com/Ajax-Loader/index.html'
    button = '[class="btn btn-default btn-lg dropdown-toggle"]'
    header = '[class="modal-header"]'

    constructor(page) {
        this.page = page
    }
  
    async visit() {
        await this.page.goto(this.url)
    }

    async headClick() {
        
        await this.page.click(this.button);
        await this.page.waitForSelector(this.header);
        const headerText = await this.page.textContent(this.header);
        expect(headerText).toContain('Well ');
    }

}

const AJX = (page) => new Ajax(page)

module.exports = { AJX }