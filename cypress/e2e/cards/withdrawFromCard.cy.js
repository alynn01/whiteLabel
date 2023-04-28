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

    it('Test that the user is able to access withdraw from physical card', () => {
        loginPage.login('damiuser001@yopmail.com', 'Password@1');
        cy.get('.onboarding-title').contains('Welcome');
        cy.get('.start').contains('Not interested').click();
        cy.get('.title').contains('Damilare').should('be.visible');
        cy.get('.app-onboarding-menu-cards > .nav-icon').click();
        cy.wait(3000)
        withdrawalPage.accessWithdrawFromCardPage();
        withdrawalPage.enterWithdrawalDetails();
        
    })

    it('Test that the user is able to access withdraw from virtual card', () => {
      loginPage.login('damiuser001@yopmail.com', 'Password@1');
      cy.get('.onboarding-title').contains('Welcome');
      cy.get('.start').contains('Not interested').click();
      cy.get('.title').contains('Damilare').should('be.visible');
      cy.get('.app-onboarding-menu-cards > .nav-icon').click();
      cy.wait(3000)
      withdrawalPage.withdrawFromVirtualCard();
  })

})