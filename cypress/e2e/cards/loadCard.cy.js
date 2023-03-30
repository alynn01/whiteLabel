import { getCardHolder } from "../../fixtures/index.js";
import { LoginPage, CardsPage, LoadCardPage } from "../../support/pages/index";

const loginPage = new LoginPage();
const cardsPage = new CardsPage();
const loadCardPage = new LoadCardPage();
const cardHolder = getCardHolder();

describe('Load Card', () => {

    beforeEach(() => {
      loginPage.accessLoginModal();
    });

    it('Test that the user is able to access load physical card', () => {
        loginPage.login("damiuser001@yopmail.com", "Password@1");
        cy.get('.onboarding-title').contains('Welcome');
        cy.get('.start').contains('Not interested').click();
        cy.get('.title').contains('Damilare').should('be.visible');
        cy.get('.app-onboarding-menu-cards > .nav-icon').click();
        cy.wait(3000)
        loadCardPage.accessLoadCardPage();
        loadCardPage.loadPhysicalCard();
    })

    it('Test that the user is able to access load virtual card', () => {
      loginPage.login("damiuser001@yopmail.com", "Password@1");
      cy.get('.onboarding-title').contains('Welcome');
      cy.get('.start').contains('Not interested').click();
      cy.get('.title').contains('Damilare').should('be.visible');
      cy.get('.app-onboarding-menu-cards > .nav-icon').click();
      cy.wait(3000)
      loadCardPage.loadVirtualCard();
      
  })

})