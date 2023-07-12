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
        loginPage.login('pasha001@qa.team', 'Test@123');
        // cy.get('.onboarding-title').contains('Welcome');
        // cy.get('.start').contains('Not interested').click();
        cy.get('.title').contains('Pasha').should('be.visible');
        transactionPage.accessTransactionPage()
    })

    it('Test that user is able to navigate to the transactions details page', () => {
        loginPage.login('pasha001@qa.team', 'Test@123');
        // cy.get('.onboarding-title').contains('Welcome');
        // cy.get('.start').contains('Not interested').click();
        cy.get('.title').contains('Pasha').should('be.visible');
        transactionPage.accessTransactionPage();
        transactionPage.accessTransactionDetails();
        cy.get('.pdfButton > .formButton').contains('Download receipt').should('be.visible')
    })
})