import { LoginPage, CardsPage, CreateVirtualCardPage} from "../../support/pages/index";

const loginPage = new LoginPage();
const cardsPage = new CardsPage();
const createVirtualCard = new CreateVirtualCardPage();
const email = "guestone@qa.team";
const password = "P@$sw0rd";

describe('Card to card transfer', () => {

    beforeEach(() => {
      loginPage.accessLoginModal();
    });

    it('Test that the user is able to access activate virtual card', () => {
        loginPage.login(email, password);
        cy.get('.onboarding-title').contains('Welcome');
        cy.get('.start').contains('Not interested').click();
        cy.get('.title').contains('Amayindi').should('be.visible');
        //cardsPage.accessCardsPage();
        createVirtualCard.createCard();
        
    })

})