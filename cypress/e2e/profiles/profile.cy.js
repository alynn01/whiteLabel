import { getCardHolder } from "../../fixtures/index.js";
import { LoginPage, ProfilePage } from "../../support/pages/index";

const loginPage = new LoginPage();
const profilePage = new ProfilePage();
const cardHolder = getCardHolder();

describe('Profile', () => {

    beforeEach(() => {
      loginPage.accessLoginModal();
    });

    it('Test that user is able to navigate to the profile page', () => {
        loginPage.login(cardHolder.email, cardHolder.password);
        cy.get('.onboarding-title').contains('Welcome').should('be.visible');
        cy.get('.shepherd-footer > .start').contains(`Not interested`).click()
        profilePage.accessProfilePage();
    })
})