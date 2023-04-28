import { getCardHolder } from "../../fixtures/index.js";
import { LoginPage, CardsPage, LoadCardPage } from "../../support/pages/index";

const loginPage = new LoginPage();
const cardsPage = new CardsPage();
const loadCardPage = new LoadCardPage();
const cardHolder = getCardHolder();

describe("Load Card", () => {
  beforeEach(() => {
    loginPage.accessLoginModal();
  });

  it("Test that the user is unable to load physical card with insufficient balance in wallet", () => {
    loginPage.login("damiuser001@yopmail.com", "Password@1");
    cy.get(".onboarding-title").contains("Welcome");
    cy.get(".start").contains("Not interested").click();
    cy.get(".title").contains("Damilare").should("be.visible");
    cy.get(".app-onboarding-menu-cards > .nav-icon").click();
    cy.wait(3000);
    loadCardPage.accessLoadCardPage();
    loadCardPage.loadPhysicalCard();
  });

  it("Test that the user is unable to load physical card without amount", () => {
    loginPage.login("damiuser001@yopmail.com", "Password@1");
    cy.get(".onboarding-title").contains("Welcome");
    cy.get(".start").contains("Not interested").click();
    cy.get(".title").contains("Damilare").should("be.visible");
    cy.get(".app-onboarding-menu-cards > .nav-icon").click();
    cy.wait(3000);
    loadCardPage.accessLoadCardPage();
    loadCardPage.loadPhysicalCardWithoutAmount();
  });

  it("Test that the user is unable to load physical card without card details", () => {
    loginPage.login("damiuser001@yopmail.com", "Password@1");
    cy.get(".onboarding-title").contains("Welcome");
    cy.get(".start").contains("Not interested").click();
    cy.get(".title").contains("Damilare").should("be.visible");
    cy.get(".app-onboarding-menu-cards > .nav-icon").click();
    cy.wait(3000);
    loadCardPage.accessLoadCardPage();
    loadCardPage.loadPhysicalCardWithoutCardDetails();
  });

  it("Test that the user is unable to load physical card without wallet details", () => {
    loginPage.login("damiuser001@yopmail.com", "Password@1");
    cy.get(".onboarding-title").contains("Welcome");
    cy.get(".start").contains("Not interested").click();
    cy.get(".title").contains("Damilare").should("be.visible");
    cy.get(".app-onboarding-menu-cards > .nav-icon").click();
    cy.wait(3000);
    loadCardPage.accessLoadCardPage();
    loadCardPage.loadPhysicalCardWithoutWalletDetails();
  });

  it("Test that the user is unable to load virtual card with insufficient balance in account", () => {
    loginPage.login("damiuser001@yopmail.com", "Password@1");
    cy.get(".onboarding-title").contains("Welcome");
    cy.get(".start").contains("Not interested").click();
    cy.get(".title").contains("Damilare").should("be.visible");
    cy.get(".app-onboarding-menu-cards > .nav-icon").click();
    cy.wait(3000);
    loadCardPage.loadVirtualCard();
  });

  it("Test that the user is unable to load virtual card with insufficient balance in account", () => {
    loginPage.login("damiuser001@yopmail.com", "Password@1");
    cy.get(".onboarding-title").contains("Welcome");
    cy.get(".start").contains("Not interested").click();
    cy.get(".title").contains("Damilare").should("be.visible");
    cy.get(".app-onboarding-menu-cards > .nav-icon").click();
    cy.wait(3000);
    loadCardPage.loadVirtualCardWithoutAmount();
  });
});
