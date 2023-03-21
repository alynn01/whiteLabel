import { getCardHolder } from "../../fixtures/index.js";
import { LoginPage, TransactionPage } from "../../support/pages/index";

const loginPage = new LoginPage();
const transactionPage = new TransactionPage();
const cardHolder = getCardHolder();

describe('Transactions', () => {

    beforeEach(() => {
      loginPage.accessLoginModal();
    });

    it('Test that user is able to navigate to the transactions page', () => {
        loginPage.login(cardHolder.email, cardHolder.password);
        cy.get('.title').contains('Damilare').should('be.visible');
        transactionPage.accessTransactionPage()
    })

    it('Test that user is able to navigate to the transactions details page', () => {
        loginPage.login(cardHolder.email, cardHolder.password);
        cy.get('.onboarding-title').contains('Welcome').should('be.visible');
        cy.get('.shepherd-footer > .start').contains(`Not interested`).click();
        transactionPage.accessTransactionPage();
        transactionPage.accessTransactionDetails();
    })
})