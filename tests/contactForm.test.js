const { test, expect } = require('@playwright/test');
const { CUP } = require('../PageObjects/contactUsPageObject')

//Parameters
const firstName = 'Harry'
const lastName = 'Potter' 
const emailAddress = 'hp@wp.pl'
const comment = 'abcdefghijkl'
const wrongEmailAddress = 'luki@pl'

test('fill contact form and reset clean', async ({page}) => {
    const ContactUsPage = CUP(page)
    await ContactUsPage.visit()
    await ContactUsPage.firstNameInput(firstName)
    await ContactUsPage.lastNameInput(lastName)
    await ContactUsPage.emailAddressInput(emailAddress)
    await ContactUsPage.commentsInput(comment)

    await ContactUsPage.Reset()
    await ContactUsPage.checkIfEmptyFields()

})

test('fill contact form partially', async ({page}) => {
    const ContactUsPage = CUP(page)
    await ContactUsPage.visit()
    await ContactUsPage.firstNameInput(firstName)
    await ContactUsPage.lastNameInput(lastName)

    await ContactUsPage.Submit()
    await ContactUsPage.errorCheck()

})

test('incorrect Email', async ({page}) => {
    const ContactUsPage = CUP(page)
    await ContactUsPage.visit()
    await ContactUsPage.emailAddressInput(wrongEmailAddress)
    
    await ContactUsPage.firstNameInput(firstName)
    await ContactUsPage.lastNameInput(lastName)
    await ContactUsPage.commentsInput(comment)

    await ContactUsPage.Submit()
    await ContactUsPage.errorCheck()

})

test('fill all data and submit', async ({page}) => {
    const ContactUsPage = CUP(page)
    await ContactUsPage.visit()
    await ContactUsPage.emailAddressInput(emailAddress)
    await ContactUsPage.firstNameInput(firstName)
    await ContactUsPage.lastNameInput(lastName)
    await ContactUsPage.commentsInput(comment)

    await ContactUsPage.Submit()
    await ContactUsPage.correctnessConfirmationReply()

})