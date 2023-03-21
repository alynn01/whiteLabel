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
        cy.get('.title').contains('Damilare').should('be.visible');
        cardsPage.accessCardsPage();
    })

    it('Test that the user is able to view virtual cards', () => {
        loginPage.login(cardHolder.email, cardHolder.password);
        cy.get('.title').contains('Damilare').should('be.visible');
        cardsPage.accessCardsPage();
        cardsPage.viewVirtualCards();
    })

})