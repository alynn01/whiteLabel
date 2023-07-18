import { getCardHolder } from "../../fixtures/index.js";
import {
  LoginPage,
  CardsPage,
  CardToCardTransferPage,
} from "../../support/pages/index";

const loginPage = new LoginPage();
const cardsPage = new CardsPage();
const cardToCardTransferPage = new CardToCardTransferPage();
const cardHolder = getCardHolder();

let amount = "100000";
let smallAmount = "1";

describe("Card to card transfer", () => {
  beforeEach(() => {
    cy.visit("https://stagingcardholder.essolo.com/onboarding/signin")
  });

  it("Test that the user is unable to carryout card to card transfer with insufficient funds", () => {
    loginPage.login("funduseerr@bnzgkkfu.mailosaur.net", "Test@123");
    // cy.get(".onboarding-title").contains("Welcome");
    // cy.get(".start").contains("Not interested").click();
    cy.get(".title").contains("Amayindi").should("be.visible");
    cy.get('.app-onboarding-menu-cards > .nav-icon').contains('Cards').click();
    cy.get('.sub-title').contains('View all activites on your cards');
    cy.wait(3000);
    //cardsPage.accessCardsPage();
    cardToCardTransferPage.accessCardToCardTransferPage();
    cardToCardTransferPage.enterTransferDetails(amount);
    cy.contains("Insufficient funds, top up card balance").should("be.visible");
  });

  it("Test that the user is unable to carryout card to card transfer without amount", () => {
    loginPage.login("funduseerr@bnzgkkfu.mailosaur.net", "Test@123");
    // cy.get(".onboarding-title").contains("Welcome");
    // cy.get(".start").contains("Not interested").click();
    cy.get(".title").contains("Amayindi").should("be.visible");
    cy.get('.app-onboarding-menu-cards > .nav-icon').contains('Cards').click();
    cy.get('.sub-title').contains('View all activites on your cards');
    cy.wait(3000);
   // cardsPage.accessCardsPage();
    cardToCardTransferPage.accessCardToCardTransferPage();
    cardToCardTransferPage.dontEnterTransferAmount();
  });

  it("Test that the user is unable to carryout card to card transfer without receiver card details", () => {
    loginPage.login("funduseerr@bnzgkkfu.mailosaur.net", "Test@123");
    // cy.get(".onboarding-title").contains("Welcome");
    // cy.get(".start").contains("Not interested").click();
    cy.get(".title").contains("Amayindi").should("be.visible");
    cy.get('.app-onboarding-menu-cards > .nav-icon').contains('Cards').click();
    cy.get('.sub-title').contains('View all activites on your cards');
    cy.wait(3000);
    //cardsPage.accessCardsPage();
    cardToCardTransferPage.accessCardToCardTransferPage();
    cardToCardTransferPage.dontEnterReceiverCardDetails(amount);
  });

  it("Test that the user is able to carryout card to card transfer", () => {
    loginPage.login("funduseerr@bnzgkkfu.mailosaur.net", "Test@123");
    // cy.get(".onboarding-title").contains("Welcome");
    // cy.get(".start").contains("Not interested").click();
    cy.get(".title").contains("Amayindi").should("be.visible");
    cy.get('.app-onboarding-menu-cards > .nav-icon').contains('Cards').click();
    cy.get('.sub-title').contains('View all activites on your cards');
    cy.wait(3000);
    //cardsPage.accessCardsPage();
    cardToCardTransferPage.accessCardToCardTransferPage();
    cardToCardTransferPage.enterTransferDetails(smallAmount);
    cy.get('#email > #wallet > .cardRow > .wallets_single > .single-earning-detail > .cash-box > checkbox-item > .checkbox-container > .checkbox-border').click();
    cy.get('.modal-footer-content > .formButton').click();
    cy.wait(2000)
    cardToCardTransferPage.getVerificationOTP().then((receivedOTP) => {
      cy.get(':nth-child(1) > .formInputWrapper > .formInput').type(receivedOTP);
    });
    cy.get(`[class="formButton"]`).contains(" Confirm OTP ").click();
    cy.get(`[class="cardSubtitle"]`).contains("Transfer successful").should('be.visible')
  });
});
