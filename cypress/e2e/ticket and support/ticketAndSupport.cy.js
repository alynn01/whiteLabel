import { getCardHolder } from "../../fixtures/index.js";
import { LoginPage, TicketAndSupportPage } from "../../support/pages/index";

const loginPage = new LoginPage();
const ticketsPage = new TicketAndSupportPage();
const cardHolder = getCardHolder();

describe("Help and Ticket", () => {
  beforeEach(() => {
    loginPage.accessLoginModal();
    loginPage.login(cardHolder.email, cardHolder.password);
    // cy.get(".onboarding-title").contains("Welcome");
    // cy.get(".start").contains("Not interested").click();
    cy.get(".title").contains("Amayindi").should("be.visible");
  });

  it("Test that user is able view FAQ page", () => {
    ticketsPage.accessTicketPage();
    ticketsPage.accessFAQPage();
  });

  it("Test that user is able view tickets", () => {
    ticketsPage.accessTicketPage();
    ticketsPage.accessFAQPage();
    ticketsPage.viewTickets();
  });

  it("Test that user is able to create tickets", () => {
    ticketsPage.accessTicketPage();
    ticketsPage.fillTicketForm();
      ticketsPage.clickSubmitButton();
    cy.contains(
      "Ticket has been created and forwarded to your program administrator"
    ).should("be.visible");
  });

  it("Test that user is unable to create tickets if the respective fields are empty", () => {
    ticketsPage.accessTicketPage();
    cy.get(`[class*="formButton"]`).contains(" Create a new ticket ").click();
    cy.get(`[class*="formButton"]`).contains(" Submit ticket ").click();
    cy.contains("Issue type is required").should("be.visible")
    cy.get('[class*="formInputWrapper"]').should('have.css', 'border', "1px solid rgb(255, 0, 0)")
    cy.get(`textarea[placeholder="Ticket description required"]`).should("be.visible")
  });

  it("Test that user is unable to create tickets and add an attachment that isn't compatible", () => {
    ticketsPage.accessTicketPage();
    ticketsPage.fillTicketForm();
    ticketsPage.uploadInvalidFile();
    cy.contains(
      "uploadthis.png has a file type that is not supported for upload"
    ).should("be.visible");
  });

  it("Test that user is unable to create tickets and add an attachment that is compatible but larger than 2MB", () => {
    ticketsPage.accessTicketPage();
    ticketsPage.fillTicketForm();
    ticketsPage.uploadLargeFile();
    cy.contains(
      "Transactions-history.pdf has a file size larger than 2MB"
    ).should("be.visible");
  });

  it("Test that user is able to create tickets and add an attachment that is compatible", () => {
    ticketsPage.accessTicketPage();
    ticketsPage.fillTicketForm();
    ticketsPage.uploadValidFile();
    cy.get('.selected-file').contains("sta.pdf").should("be.visible");
    cy.get(`[class*="formButton"]`).contains(" Submit ticket ").click();
    cy.contains("Ticket has been created and forwarded to your program administrator").should("be.visible");  
  });


});
