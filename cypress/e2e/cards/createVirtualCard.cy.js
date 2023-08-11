import { LoginPage, CardsPage, CreateVirtualCardPage} from "../../support/pages/index";

const loginPage = new LoginPage();
const cardsPage = new CardsPage();
const createVirtualCard = new CreateVirtualCardPage();


describe('Create Virtual Cards', () => {

    beforeEach(() => {
      loginPage.accessLoginModal();
    });

    it('Test that the user is able to access activate virtual card', () => {
        loginPage.login("funduseerr@bnzgkkfu.mailosaur.net", "Test@123");
        // cy.get('.onboarding-title').contains('Welcome');
        // cy.get('.start').contains('Not interested').click();
        cy.get('button[id="onesignal-slidedown-cancel-button"]')
            .should("contain", "Later")
            .click();
        cy.get('.title').contains('Amayindi').should('be.visible');
        //cardsPage.accessCardsPage();
        createVirtualCard.createCard();
        cy.get('[class="riders-box_legend"]').contains("mailosaur.net").click()
        cy.get('[class="formButton"]').contains("Proceed").click();
        createVirtualCard.getVerificationOTP().then((receivedOTP) => {
          cy.get(':nth-child(1) > .formInputWrapper > .formInput').type(receivedOTP);
        })
        cy.get(`[class="formButton"]`).contains(" Confirm OTP ").click();
        cy.wait(5000)
    })

})