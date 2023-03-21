import { getCardHolder } from "../../fixtures/index.js";
import { LoginPage, CardsPage, CardToCardTransferPage} from "../../support/pages/index";

const loginPage = new LoginPage();
const cardsPage = new CardsPage();
const cardToCardTransferPage = new CardToCardTransferPage();
const cardHolder = getCardHolder();

describe('Card to card transfer', () => {

    beforeEach(() => {
      loginPage.accessLoginModal();
    });

    it('Test that the user is able to access card to card transfer', () => {
        loginPage.login(cardHolder.email, cardHolder.password);
        cy.get('.onboarding-title').contains('Welcome');
        cy.get('.start').contains('Not interested').click();
        cy.get('.title').contains('Damilare').should('be.visible');
        cardsPage.accessCardsPage();
        cardToCardTransferPage.accessCardToCardTransferPage();
        cardToCardTransferPage.enterTransferDetails() 
    })

})