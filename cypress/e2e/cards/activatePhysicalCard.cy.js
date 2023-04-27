import { getCardHolder } from "../../fixtures/index.js";
import { LoginPage, CardsPage, ActivatePhysicalCardPage} from "../../support/pages/index";

const loginPage = new LoginPage();
const cardsPage = new CardsPage();
const activatePhysicalCard = new ActivatePhysicalCardPage();
const cardHolder = getCardHolder();
let validUserId = "12707764";
let invalidUserId = "123489";
let invalidFourDigits = "890";
let validFourDigits = "0577";

describe('Activate Physical Card', () => {

    beforeEach(() => {
      loginPage.accessLoginModal();
    });

    it('Test that the user is unable to activate physical card that has already been activated', () => {
        loginPage.login(cardHolder.email, cardHolder.password);
        cy.get('.onboarding-title').contains('Welcome');
        cy.get('.start').contains('Not interested').click();
        cy.get('.title').contains('Amayindi').should('be.visible');
        cardsPage.accessCardsPage();
        activatePhysicalCard.enterCardActivationDetails(validUserId, validFourDigits);
        cy.contains("Card Already Registered")
    })

    it('Test that the user is unable to activate physical card with invalid details', () => {
      loginPage.login(cardHolder.email, cardHolder.password);
      cy.get('.onboarding-title').contains('Welcome');
      cy.get('.start').contains('Not interested').click();
      cy.get('.title').contains('Amayindi').should('be.visible');
      cardsPage.accessCardsPage();
      activatePhysicalCard.enterCardActivationDetails(invalidUserId, invalidFourDigits);
      cy.contains("Client Identification can not be less than eight (8) numbers").should("be.visible")
      cy.contains("Last four digits can not be less than four (4) numbers").should("be.visible")
  })

  it('Test that the user is unable to activate physical card with details that dont exist on the system', () => {
    loginPage.login(cardHolder.email, cardHolder.password);
    cy.get('.onboarding-title').contains('Welcome');
    cy.get('.start').contains('Not interested').click();
    cy.get('.title').contains('Amayindi').should('be.visible');
    cardsPage.accessCardsPage();
    activatePhysicalCard.enterCardActivationDetails("12707767", "0570");
    cy.contains("AccountId [12737767] not found").should("be.visible")
})

})