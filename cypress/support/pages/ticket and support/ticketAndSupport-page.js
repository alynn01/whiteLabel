export class TicketAndSupportPage {
  ticketsTab = () =>
    cy.get(".app-onboarding-menu-tickets > .nav-icon > .nav-text");
  pageTitle = () => cy.get(".sub-title").contains("View and manage tickets");
  faqButton = () =>
    cy.get(`[class*="formButton"]`).contains(" Frequently Asked Questions ");
  faqList = () =>
    cy
      .get(`[class="title"]`)
      .contains(
        "As a Program Owner, can I have multi-currency company accounts?"
      );
  viewTicketPage = () =>
    cy.get(`[class*="formButton"]`).contains(" View Tickets ");
  createTicketButton = () =>
    cy.get(`[class*="formButton"]`).contains(" Create a new ticket ");
  issueType = () => cy.get(`[class*="dropdown-icon"]`);
  selectIssue = () => cy.get(`[class="riders-box_value"]`).contains("KYC");
  subjectTitle = () => cy.get(`input[placeholder="Subject"]`);
  description = () => cy.get(`textarea[placeholder="Description"]`);
  submitTicketButton = () =>
    cy.get(`[class*="formButton"]`).contains(" Submit ticket ");

  accessTicketPage() {
    this.ticketsTab().click();
    this.pageTitle().should("be.visible");
  }

  accessFAQPage() {
    this.faqButton().click();
    this.faqList().should("be.visible");
  }

  viewTickets() {
    this.viewTicketPage().click();
  }

  fillTicketForm() {
    this.createTicketButton().click();
    cy.wait(3000);
    this.issueType().click();
    this.selectIssue().click();
    this.subjectTitle().type("Automated Test Ticktet");
    this.description().type("Automation description");
  }

  uploadInvalidFile(){
    const fileToUpload = "uploadthis.png";
    cy.get('.file-upload-input').attachFile(fileToUpload)
  }

  clickSubmitButton(){
    this.submitTicketButton().click();
  }

  uploadValidFile(){
    const fileToUpload = "sta.pdf";
    cy.get('.file-upload-input').attachFile(fileToUpload)
  }

  uploadLargeFile(){
    const fileToUpload = "Transactions-history.pdf";
    cy.get('.file-upload-input').attachFile(fileToUpload)
  }
}
