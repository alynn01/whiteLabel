import { getCardHolder } from "../../fixtures/index.js";
import { LoginPage, AccountPage } from "../../support/pages/index";

const loginPage = new LoginPage();
const accountsPage = new AccountPage();
const cardHolder = getCardHolder();

describe('Account', () => {

    beforeEach(() => {
      loginPage.accessLoginModal();
    });

    it.only('Test that user is able to navigate to the accounts page', () => {
        loginPage.login(cardHolder.email, cardHolder.password);
        cy.get('.onboarding-title').contains('Welcome').should('be.visible');
        cy.get('.shepherd-footer > .start').contains(`Not interested`).click()
        accountsPage.accessAccountsPage()
    })
})