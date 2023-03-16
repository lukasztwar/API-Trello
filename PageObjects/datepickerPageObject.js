const { test, expect, moment } = require('@playwright/test');


class datepicker {

  url = 'https://webdriveruniversity.com/Datepicker/index.html'
  inputField = 'input'
  switchButton = '[class="datepicker-switch"]'
  monthsSelector = '[class="datepicker-months"]'
  yearsSelector = '[class="datepicker-years"]'
  daysSelector = '[class="datepicker-days"]'
    
    
  constructor(page) {
    this.page = page
  }

  async visit() {
    await this.page.goto(this.url)
  }

  async selectDate(date) {
    await this.page.click(this.inputField);
    await this.page.click(this.switchButton);
    await this.page.click(`${this.monthsSelector} >> text=2023`)
    await this.page.click(`${this.yearsSelector} >> text=${date.year}`)
    await this.page.click(`${this.monthsSelector} >> text=${date.month}`)
    await this.page.click(`${this.daysSelector} >> text=${date.day}`)
  }

  async check(date) {
    const expectedDate = new Date(`${date.month} ${date.day}, ${date.year}`);
    const expectedDateString = expectedDate.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '-');
    const value = await this.page.$eval(this.inputField, (input) => input.value);
    expect(value).toContain(expectedDateString);
  }

}

const DTP = (page) => new datepicker(page)

module.exports = { DTP }