import { getCardHolder } from "../../fixtures/index.js";
import { LoginPage, CardsPage, CreateVirtualCardPage} from "../../support/pages/index";

const loginPage = new LoginPage();
const cardsPage = new CardsPage();
const createVirtualCard = new CreateVirtualCardPage();
const cardHolder = getCardHolder();

describe('Card to card transfer', () => {

    beforeEach(() => {
      loginPage.accessLoginModal();
    });

    it('Test that the user is able to access activate virtual card', () => {
        loginPage.login(cardHolder.email, cardHolder.password);
        cy.get('.title').contains('Damilare').should('be.visible');
        cardsPage.accessCardsPage();
        createVirtualCard.createCard();
        
    })

})