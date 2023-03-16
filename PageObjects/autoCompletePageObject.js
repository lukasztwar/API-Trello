class AutoCompletePage {
    url = 'https://webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html'
    textFieldSelector = '[id="myInput"]'
    autocompleteListSelector = '[id="myInputautocomplete-list"]'

    constructor(page) {
        this.page = page
    }

    async visit() {
        await this.page.goto(this.url)
    }

    async typeInputInTextField(text) {
        await this.page.fill(this.textFieldSelector, text)
    }

    async selectFromAutocompleteList(item) {
        await this.page.waitForSelector(this.autocompleteListSelector)
        await this.page.waitForSelector(`text=${item}`)
        await this.page.click(`text=${item}`)
    }
}

const ACP = (page) => new AutoCompletePage(page)

module.exports = { ACP }