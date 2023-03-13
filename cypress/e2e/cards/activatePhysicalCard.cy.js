import { getCardHolder } from "../../fixtures/index.js";
import { LoginPage, CardsPage, ActivatePhysicalCardPage} from "../../support/pages/index";

const loginPage = new LoginPage();
const cardsPage = new CardsPage();
const activatePhysicalCard = new ActivatePhysicalCardPage();
const cardHolder = getCardHolder();

describe('Card to card transfer', () => {

    beforeEach(() => {
      loginPage.accessLoginModal();
    });

    it('Test that the user is able to activate physical card', () => {
        loginPage.login(cardHolder.email, cardHolder.password);
        cy.get('.onboarding-title').contains('Welcome').should('be.visible');
        cy.get('.shepherd-footer > .start').contains(`Not interested`).click()
        cardsPage.accessCardsPage();
        activatePhysicalCard.enterCardActivationDetails();
        
    })

})