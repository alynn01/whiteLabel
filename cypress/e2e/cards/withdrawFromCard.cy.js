import { getCardHolder } from "../../fixtures/index.js";
import { LoginPage, CardsPage, WithdrawalPage} from "../../support/pages/index";

const loginPage = new LoginPage();
const cardsPage = new CardsPage();
const withdrawalPage = new WithdrawalPage();
const cardHolder = getCardHolder();

describe('Withdraw from card', () => {

    beforeEach(() => {
      loginPage.accessLoginModal();
    });

    it('Test that the user is able to withdraw from physical card', () => {
        loginPage.login(cardHolder.email, cardHolder.password);
        cy.get('.onboarding-title').contains('Welcome').should('be.visible');
        cy.get('.shepherd-footer > .start').contains(`Not interested`).click()
        cardsPage.accessCardsPage();
        withdrawalPage.accessWithdrawFromCardPage();
        withdrawalPage.enterWithdrawalDetails();
        
    })

    it('Test that the user is able to withdraw from virtual card', () => {
      loginPage.login(cardHolder.email, cardHolder.password);
      cy.get('.onboarding-title').contains('Welcome').should('be.visible');
      cy.get('.shepherd-footer > .start').contains(`Not interested`).click()
      cardsPage.accessCardsPage();
      withdrawalPage.withdrawFromVirtualCard();
  })

})