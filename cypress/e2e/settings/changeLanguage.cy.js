import { getCardHolder } from "../../fixtures/index.js";
import { LoginPage, SettingsPage } from "../../support/pages/index";

const loginPage = new LoginPage();
const settingsPage = new SettingsPage();
const cardHolder = getCardHolder();

describe('Change Language', () => {

    beforeEach(() => {
      loginPage.accessLoginModal();
    });

    it('Test that user is able to navigate to the change language page', () => {
        loginPage.login(cardHolder.email, cardHolder.password);
        // cy.get('.onboarding-title').contains('Welcome');
        // cy.get('.start').contains('Not interested').click();
        cy.get('.title').contains('Amayindi').should('be.visible');
        settingsPage.accessPage()
        settingsPage.changeLanguage()
    })
})