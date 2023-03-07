class AutoCompletePage {
    url = 'https://webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html'
    inputSelector = '[id="myInput"]'
    listSelector = '[id="myInputautocomplete-list"]'

    constructor(page) {
        this.page = page
    }

    async visit() {
        await this.page.goto(this.url)
    }

    async typeInput(text) {
        await this.page.fill(this.inputSelector, text)
    }

    async selectFromList(item) {
        await this.page.waitForSelector(this.listSelector)
        await this.page.waitForSelector(`text=${item}`)
        await this.page.click(`text=${item}`)
    }
}

const ACP = (page) => new AutoCompletePage(page)

module.exports = { ACP }