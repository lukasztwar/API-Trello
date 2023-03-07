const { test, expect } = require('@playwright/test');
const { CUP } = require('../PageObjects/ContactUsPageObject')

test('fill contact form and reset clean', async ({page}) => {
    const ContactUsPage = CUP(page)
    await ContactUsPage.visit()
    await ContactUsPage.firstNameInput('luki')
    await ContactUsPage.lastNameInput('puki')
    await ContactUsPage.emailAddressInput('luki@wp.pl')
    await ContactUsPage.commentsInput('lalala')

    await ContactUsPage.Resset()

    await ContactUsPage.EmptyFields()

})

test('fill contact form partially', async ({page}) => {
    const ContactUsPage = CUP(page)
    await ContactUsPage.visit()
    await ContactUsPage.firstNameInput('luki')
    await ContactUsPage.lastNameInput('puki')

    await ContactUsPage.Submit()
    await ContactUsPage.BodyCheck()

})

test('incorrect Email', async ({page}) => {
    const ContactUsPage = CUP(page)
    await ContactUsPage.visit()
    await ContactUsPage.emailAddressInput('luki@pl')
    
    await ContactUsPage.firstNameInput('luki')
    await ContactUsPage.lastNameInput('puki')
    await ContactUsPage.commentsInput('lalala')

    await ContactUsPage.Submit()
    await ContactUsPage.BodyCheck()

})

test('fill all data and submit', async ({page}) => {
    const ContactUsPage = CUP(page)
    await ContactUsPage.visit()
    await ContactUsPage.emailAddressInput('luki@wp.pl')
    await ContactUsPage.firstNameInput('luki')
    await ContactUsPage.lastNameInput('puki')
    await ContactUsPage.commentsInput('lalala')

    await ContactUsPage.Submit()
    await ContactUsPage.Reply()

})