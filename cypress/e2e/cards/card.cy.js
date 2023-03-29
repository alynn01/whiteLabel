import { getCardHolder } from "../../fixtures/index.js";
import { LoginPage, CardsPage } from "../../support/pages/index";

const loginPage = new LoginPage();
const cardsPage = new CardsPage();
const cardHolder = getCardHolder();
const email = "guestone@qa.team";
const password = "P@$sw0rd";

describe('Cards', () => {

    beforeEach(() => {
      loginPage.accessLoginModal();
    });

    it('Test that user is able to navigate to the cards page', () => {
        loginPage.login(cardHolder.email, cardHolder.password);
        cy.get('.onboarding-title').contains('Welcome');
        cy.get('.start').contains('Not interested').click();
        cy.get('.title').contains('Amayindi').should('be.visible');
        cardsPage.accessCardsPage();
    })

    it('Test that the user is able to view virtual cards', () => {
        loginPage.login(email, password);
        cy.get('.onboarding-title').contains('Welcome');
        cy.get('.start').contains('Not interested').click();
        cy.get('.title').contains('Amayindi').should('be.visible');
        cardsPage.viewVirtualCards();
    })

})