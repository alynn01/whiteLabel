import { getCardHolder } from "../../fixtures/index.js";
import { LoginPage, CardsPage, ActivatePhysicalCardPage} from "../../support/pages/index";

const loginPage = new LoginPage();
const cardsPage = new CardsPage();
const activatePhysicalCard = new ActivatePhysicalCardPage();
const cardHolder = getCardHolder();

describe('Activate Physical Card', () => {

    beforeEach(() => {
      loginPage.accessLoginModal();
    });

    it('Test that the user is able to activate physical card', () => {
        loginPage.login(cardHolder.email, cardHolder.password);
        cy.get('.onboarding-title').contains('Welcome');
        cy.get('.start').contains('Not interested').click();
        cy.get('.title').contains('Amayindi').should('be.visible');
        cardsPage.accessCardsPage();
        activatePhysicalCard.enterCardActivationDetails();
        
    })

})