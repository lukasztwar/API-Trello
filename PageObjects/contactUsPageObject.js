const { chromium } = require('@playwright/test');

class ContactUsPage {
    url = 'https://webdriveruniversity.com/Contact-Us/contactus.html'
    fieldFirstName = '[placeholder="First Name"]'
    fieldLastName = '[placeholder="Last Name"]'
    fieldEmail = '[placeholder="Email Address"]'
    fieldComments = '[placeholder="Comments"]'
    resetButton = '[value="RESET"]'
    submitButton = '[value="SUBMIT"]'
    replyText = '[id="contact_reply"]'


    constructor(page) {
        this.page = page
    }

    async visit() {
        await this.page.goto(this.url)
    }

    async firstNameInput(text) {
        await this.page.type(this.fieldFirstName, text);
        await this.page.waitForSelector(this.fieldFirstName, { value: text });
    }

    async lastNameInput(text) {
        await this.page.type(this.fieldLastName, text);
        await this.page.waitForSelector(this.fieldLastName, { value: text });
    }
    
    async emailAddressInput(text) {
        await this.page.type(this.fieldEmail, text);
        await this.page.waitForSelector(this.fieldEmail, { value: text });
    }
    
    async commentsInput(text) {
        await this.page.type(this.fieldComments, text);
        await this.page.waitForSelector(this.fieldComments, { value: text });
    }
    
    async checkIfEmptyFields() {
        await this.page.waitForSelector(this.fieldFirstName, { value: '' });
        await this.page.waitForSelector(this.fieldLastName, { value: '' });
        await this.page.waitForSelector(this.fieldEmail, { value: '' });
        await this.page.waitForSelector(this.fieldComments, { value: '' });
    }
    
    async Reset() {
        await this.page.click(this.resetButton);
    }
    
    async Submit() {
        await this.page.click(this.submitButton);
    }
    
    async errorCheck() {
        await this.page.waitForSelector('body', { text: 'Error:' });
    }
    
    async correctnessConfirmationReply() {
        await this.page.waitForSelector(this.replyText, { text: 'Thank You for your Message!' });
    }
}

const CUP = (page) => new ContactUsPage(page)

module.exports = { CUP }