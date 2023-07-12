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

let amount = "10";

describe("Card to card transfer", () => {
  beforeEach(() => {
    loginPage.accessLoginModal();
  });

  it("Test that the user is unable to carryout card to card transfer with insufficient funds", () => {
    loginPage.login(cardHolder.email, cardHolder.password);
    // cy.get(".onboarding-title").contains("Welcome");
    // cy.get(".start").contains("Not interested").click();
    cy.get(".title").contains("Amayindi").should("be.visible");
    cardsPage.accessCardsPage();
    cardToCardTransferPage.accessCardToCardTransferPage();
    cardToCardTransferPage.enterTransferDetails(amount);
    cy.contains("Insufficient funds, fund card first").should("be.visible");
  });

  it("Test that the user is unable to carryout card to card transfer without amount", () => {
    loginPage.login(cardHolder.email, cardHolder.password);
    // cy.get(".onboarding-title").contains("Welcome");
    // cy.get(".start").contains("Not interested").click();
    cy.get(".title").contains("Amayindi").should("be.visible");
    cardsPage.accessCardsPage();
    cardToCardTransferPage.accessCardToCardTransferPage();
    cardToCardTransferPage.dontEnterTransferAmount();
  });

  it("Test that the user is unable to carryout card to card transfer without receiver card details", () => {
    loginPage.login(cardHolder.email, cardHolder.password);
    // cy.get(".onboarding-title").contains("Welcome");
    // cy.get(".start").contains("Not interested").click();
    cy.get(".title").contains("Amayindi").should("be.visible");
    cardsPage.accessCardsPage();
    cardToCardTransferPage.accessCardToCardTransferPage();
    cardToCardTransferPage.dontEnterReceiverCardDetails(amount);
  });
});
