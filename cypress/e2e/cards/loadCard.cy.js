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
        loginPage.login(cardHolder.email, cardHolder.password);
        cy.get('.title').contains('Damilare').should('be.visible');
        cardsPage.accessCardsPage();
        loadCardPage.accessLoadCardPage();
        loadCardPage.loadPhysicalCard();
    })

    it('Test that the user is able to access load virtual card', () => {
      loginPage.login(cardHolder.email, cardHolder.password);
      cy.get('.title').contains('Damilare').should('be.visible');
      cardsPage.accessCardsPage();
      loadCardPage.loadVirtualCard();
      
  })

})