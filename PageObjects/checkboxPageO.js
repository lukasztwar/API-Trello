const { test, expect } = require('@playwright/test');

class Checkbox {
    url = 'https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html'
    green = '[id="radio-buttons"]>[value="green"]'
    blue = '[id="radio-buttons"]>[value="blue"]'
    orange = 'form [value="orange"]'
    purple = '[id="radio-buttons"]>[value="purple"]'
    yellow = '[id="radio-buttons"]>[value="yellow"]'

    constructor(page) {
        this.page = page
    }

    async visit() {
        await this.page.goto(this.url)
    }

    async checkGreen() {
        await this.page.check(this.green);
        await this.page.waitForSelector(`${this.green}:checked`);
    }

    async checkBlue() {
        await this.page.check(this.blue);
        await this.page.waitForSelector(`${this.blue}:checked`);
    }

    async checkOrange() {
        await this.page.check(this.orange);
        await this.page.waitForSelector(`${this.orange}:checked`);
    }

    async checkPurple() {
        await this.page.check(this.purple);
        await this.page.waitForSelector(`${this.purple}:checked`);
    }

    async checkYellow() {
        await this.page.check(this.yellow);
        await this.page.waitForSelector(`${this.yellow}:checked`);
    }

    async verifyOtherThanGreen() {
        await expect(await this.page.isChecked(this.blue)).toBe(false);
        await expect(await this.page.isChecked(this.yellow)).toBe(false);
        await expect(await this.page.isChecked(this.orange)).toBe(false);
        await expect(await this.page.isChecked(this.purple)).toBe(false);
    }

    async verifyOtherThanBlue() {
        await expect(await this.page.isChecked(this.green)).toBe(false);
        await expect(await this.page.isChecked(this.yellow)).toBe(false);
        await expect(await this.page.isChecked(this.purple)).toBe(false);
        await expect(await this.page.isChecked(this.orange)).toBe(false);
      }
    
      async verifyOtherThanYellow() {
        await expect(await this.page.isChecked(this.green)).toBe(false);
        await expect(await this.page.isChecked(this.blue)).toBe(false);
        await expect(await this.page.isChecked(this.orange)).toBe(false);
        await expect(await this.page.isChecked(this.purple)).toBe(false);
      }
    
      async verifyOtherThanOrange() {
        await expect(await this.page.isChecked(this.green)).toBe(false);
        await expect(await this.page.isChecked(this.blue)).toBe(false);
        await expect(await this.page.isChecked(this.yellow)).toBe(false);
        await expect(await this.page.isChecked(this.purple)).toBe(false);
      }
    
      async verifyOtherThanPurple() {
        await expect(await this.page.isChecked(this.green)).toBe(false);
        await expect(await this.page.isChecked(this.blue)).toBe(false);
        await expect(await this.page.isChecked(this.yellow)).toBe(false);
        await expect(await this.page.isChecked(this.orange)).toBe(false);
      }

}

const CBX = (page) => new Checkbox(page)

module.exports = { CBX }