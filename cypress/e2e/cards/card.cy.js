import { getCardHolder } from "../../fixtures/index.js";
import { LoginPage, CardsPage } from "../../support/pages/index";

const loginPage = new LoginPage();
const cardsPage = new CardsPage();
const cardHolder = getCardHolder();

describe('Cards', () => {

    beforeEach(() => {
      loginPage.accessLoginModal();
    });

    it('Test that user is able to navigate to the cards page', () => {
        loginPage.login(cardHolder.email, cardHolder.password);
        cy.get('.onboarding-title').contains('Welcome').should('be.visible');
        cy.get('.shepherd-footer > .start').contains(`Not interested`).click()
        cardsPage.accessCardsPage();
    })

    it('Test that the user is able to view details of virtual cards', () => {
        loginPage.login(cardHolder.email, cardHolder.password);
        cy.get('.onboarding-title').contains('Welcome').should('be.visible');
        cy.get('.shepherd-footer > .start').contains(`Not interested`).click()
        cardsPage.accessCardsPage();
        cardsPage.viewVirtualCards();
    })

})