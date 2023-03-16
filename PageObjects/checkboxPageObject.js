const { test, expect } = require('@playwright/test');

class Checkbox {
    url = 'https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html'
    greenColor = '[id="radio-buttons"]>[value="green"]'
    blueColor = '[id="radio-buttons"]>[value="blue"]'
    orangeColor = 'form [value="orange"]'
    purpleColor = '[id="radio-buttons"]>[value="purple"]'
    yellowColor = '[id="radio-buttons"]>[value="yellow"]'

    constructor(page) {
        this.page = page
    }

    async visit() {
        await this.page.goto(this.url)
    }

    async checkGreenColor() {
        await this.page.check(this.greenColor);
        await this.page.waitForSelector(`${this.greenColor}:checked`);
    }

    async checkBlueColor() {
        await this.page.check(this.blueColor);
        await this.page.waitForSelector(`${this.blueColor}:checked`);
    }

    async checkOrangeColor() {
        await this.page.check(this.orangeColor);
        await this.page.waitForSelector(`${this.orangeColor}:checked`);
    }

    async checkPurpleColor() {
        await this.page.check(this.purpleColor);
        await this.page.waitForSelector(`${this.purpleColor}:checked`);
    }

    async checkYellowColor() {
        await this.page.check(this.yellowColor);
        await this.page.waitForSelector(`${this.yellowColor}:checked`);
    }

    async verifyOtherThanGreenColor() {
        await expect(await this.page.isChecked(this.blueColor)).toBe(false);
        await expect(await this.page.isChecked(this.yellowColor)).toBe(false);
        await expect(await this.page.isChecked(this.orangeColor)).toBe(false);
        await expect(await this.page.isChecked(this.purpleColor)).toBe(false);
    }

    async verifyOtherThanBlueColor() {
        await expect(await this.page.isChecked(this.greenColor)).toBe(false);
        await expect(await this.page.isChecked(this.yellowColor)).toBe(false);
        await expect(await this.page.isChecked(this.purpleColor)).toBe(false);
        await expect(await this.page.isChecked(this.orangeColor)).toBe(false);
    }
    
    async verifyOtherThanYellowColor() {
        await expect(await this.page.isChecked(this.greenColor)).toBe(false);
        await expect(await this.page.isChecked(this.blueColor)).toBe(false);
        await expect(await this.page.isChecked(this.orangeColor)).toBe(false);
        await expect(await this.page.isChecked(this.purpleColor)).toBe(false);
    }
    
    async verifyOtherThanOrangeColor() {
        await expect(await this.page.isChecked(this.greenColor)).toBe(false);
        await expect(await this.page.isChecked(this.blueColor)).toBe(false);
        await expect(await this.page.isChecked(this.yellowColor)).toBe(false);
        await expect(await this.page.isChecked(this.purpleColor)).toBe(false);
    }
    
    async verifyOtherThanPurpleColor() {
        await expect(await this.page.isChecked(this.greenColor)).toBe(false);
        await expect(await this.page.isChecked(this.blueColor)).toBe(false);
        await expect(await this.page.isChecked(this.yellowColor)).toBe(false);
        await expect(await this.page.isChecked(this.orangeColor)).toBe(false);
    }

}

const CBX = (page) => new Checkbox(page)

module.exports = { CBX }