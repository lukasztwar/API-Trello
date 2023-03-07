const { test, expect, moment } = require('@playwright/test');


class datepicker {

    url = 'https://webdriveruniversity.com/Datepicker/index.html'
    input = 'input'
    switch = '[class="datepicker-switch"]'
    months = '[class="datepicker-months"]'
    years = '[class="datepicker-years"]'
    days = '[class="datepicker-days"]'
    
    
    constructor(page) {
      this.page = page
    }

    async visit() {
      await this.page.goto(this.url)
    }

    async selectDate(date) {
      await this.page.click(this.input);
      await this.page.click(this.switch);
      await this.page.click(`${this.months} >> text=2023`)
      await this.page.click(`${this.years} >> text=${date.year}`)
      await this.page.click(`${this.months} >> text=${date.month}`)
      await this.page.click(`${this.days} >> text=${date.day}`)

    }

  //  async check(date) {
  //      const value = await this.page.$eval(this.input, (input) => input.value);
  //      expect(value).toContain(date);
  //  }

  async check(date) {
    const expectedDate = new Date(`${date.month} ${date.day}, ${date.year}`);
    const expectedDateString = expectedDate.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '-');
    const value = await this.page.$eval(this.input, (input) => input.value);
    expect(value).toContain(expectedDateString);
  }

}

const DTP = (page) => new datepicker(page)

module.exports = { DTP }