const { chromium } = require('@playwright/test');

class ContactUsPage {
    url = 'https://webdriveruniversity.com/Contact-Us/contactus.html'
    FirstName = '[placeholder="First Name"]'
    LastName = '[placeholder="Last Name"]'
    Email = '[placeholder="Email Address"]'
    Comments = '[placeholder="Comments"]'
    reset = '[value="RESET"]'
    ssubmit = '[value="SUBMIT"]'
    RReply = '[id="contact_reply"]'


    constructor(page) {
        this.page = page
    }

    async visit() {
        await this.page.goto(this.url)
    }

    async firstNameInput(text) {
        await this.page.type(this.FirstName, text);
        await this.page.waitForSelector(this.FirstName, { value: text });
    }

    async lastNameInput(text) {
        await this.page.type(this.LastName, text);
        await this.page.waitForSelector(this.LastName, { value: text });
    }
    
    async emailAddressInput(text) {
        await this.page.type(this.Email, text);
        await this.page.waitForSelector(this.Email, { value: text });
    }
    
    async commentsInput(text) {
        await this.page.type(this.Comments, text);
        await this.page.waitForSelector(this.Comments, { value: text });
    }
    
    async EmptyFields() {
        await this.page.waitForSelector(this.FirstName, { value: '' });
        await this.page.waitForSelector(this.LastName, { value: '' });
        await this.page.waitForSelector(this.Email, { value: '' });
        await this.page.waitForSelector(this.Comments, { value: '' });
    }
    
    async Resset() {
        await this.page.click(this.reset);
    }
    
    async Submit() {
        await this.page.click(this.ssubmit);
    }
    
    async BodyCheck() {
        await this.page.waitForSelector('body', { text: 'Error:' });
    }
    
    async Reply() {
        await this.page.waitForSelector(this.RReply, { text: 'Thank You for your Message!' });
    }
}

const CUP = (page) => new ContactUsPage(page)

module.exports = { CUP }