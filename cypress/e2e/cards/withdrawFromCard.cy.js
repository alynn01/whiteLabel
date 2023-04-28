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

    it('Test that the user is unable to withdraw from physical card if there is an insufficient balance', () => {
        loginPage.login('damiuser001@yopmail.com', 'Password@1');
        cy.get('.onboarding-title').contains('Welcome');
        cy.get('.start').contains('Not interested').click();
        cy.get('.title').contains('Damilare').should('be.visible');
        cy.get('.app-onboarding-menu-cards > .nav-icon').click();
        cy.wait(3000)
        withdrawalPage.accessWithdrawFromCardPage();
        withdrawalPage.enterWithdrawalDetails();
        
        
    })
    it('Test that the user is unable to withdraw from physical card if the amount field is empty', () => {
      loginPage.login('damiuser001@yopmail.com', 'Password@1');
      cy.get('.onboarding-title').contains('Welcome');
      cy.get('.start').contains('Not interested').click();
      cy.get('.title').contains('Damilare').should('be.visible');
      cy.get('.app-onboarding-menu-cards > .nav-icon').click();
      cy.wait(3000)
      //cardsPage.accessCardsPage();
      withdrawalPage.accessWithdrawFromCardPage();
      withdrawalPage.enterWithdrawalDetailsWithoutAmount();
      
      
  })
  it('Test that the user is unable to withdraw from physical card if the user does not select the card to be withdrawn from', () => {
    loginPage.login('damiuser001@yopmail.com', 'Password@1');
    cy.get('.onboarding-title').contains('Welcome');
    cy.get('.start').contains('Not interested').click();
    cy.get('.title').contains('Damilare').should('be.visible');
    cy.get('.app-onboarding-menu-cards > .nav-icon').click();
    cy.wait(3000)
    //cardsPage.accessCardsPage();
    withdrawalPage.accessWithdrawFromCardPage();
    withdrawalPage.enterWithdrawalDetailsWithoutSelectingCard();
  })
  it('Test that the user is unable to withdraw from physical card if the user does not select the wallet to be credited', () => {
    loginPage.login('damiuser001@yopmail.com', 'Password@1');
    cy.get('.onboarding-title').contains('Welcome');
    cy.get('.start').contains('Not interested').click();
    cy.get('.title').contains('Damilare').should('be.visible');
    cy.get('.app-onboarding-menu-cards > .nav-icon').click();
    cy.wait(3000)
    //cardsPage.accessCardsPage();
    withdrawalPage.accessWithdrawFromCardPage();
    withdrawalPage.enterWithdrawalDetailsWithoutSelectingWallet();
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