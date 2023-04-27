export class CardToCardTransferPage {
  moreOptionsDropdown = () => cy.get("app-dropdown-icon > #dropdownchildsmall");
  cardToCardTransferDropdownItem = () =>
    cy.get(`[id='dropdownchildsmall']`).contains(" Card to card transfer ");
  pageTitle = () => cy.get(`[class='cardTitle']`);
  cardDropdown = () => cy.get("app-dropdown-icon > #dropdownchild");
  clientIdentification = () =>
    cy.get(".cardRow > :nth-child(2) > .formInputWrapper");
  lastFourDigits = () => cy.get(".cardRow > :nth-child(4) > .formInputWrapper");
  accountDropdownItem = () =>
    cy.get(`[id='dropdownchild']`).contains(" USD - 6122256485 ");
  cardLastFourDropdownItem = () => cy.get(`[id='dropdownchild']`);
  amountEntryField = () =>
    cy.get(`[class="formInputWrapper no-error"]`).eq(0);

  transferAmountButton = () =>
  cy.get(".formButton").eq(4).findByText("Transfer");

  toggleButton = () => cy.get("toggle-icon > .toggle-wrapper");

  accessCardToCardTransferPage() {
    this.moreOptionsDropdown().click({ force: true });
    this.cardToCardTransferDropdownItem().click();
    this.pageTitle().contains("Card to card transfer").should("be.visible");
  }

  enterTransferDetails(figure) {
    this.cardDropdown().click({ force: true });
    this.cardLastFourDropdownItem().contains("7241").click();
    this.amountEntryField().type(figure);
    this.clientIdentification().type("12707634");
    this.lastFourDigits().type("0032");
    cy.wait(3000)
    this.transferAmountButton().click({ force: true });
  }

  dontEnterTransferAmount(){
    this.cardDropdown().click({ force: true });
    this.cardLastFourDropdownItem().contains("7241").click();
    this.clientIdentification().type("12707634");
    this.lastFourDigits().type("0032");
    cy.wait(3000)
    this.transferAmountButton().click({ force: true });
    cy.wait(3000)
    cy.get(`input[placeholder="Amount Required"]`).should("be.visible")
  }

  dontEnterReceiverCardDetails(figure) {
    this.cardDropdown().click({ force: true });
    this.cardLastFourDropdownItem().contains("7241").click();
    this.amountEntryField().type(figure);
    cy.wait(3000)
    this.transferAmountButton().click({ force: true });
    cy.get(`input[placeholder="Client Identification Required"]`).should("be.visible")
    cy.get(`input[placeholder="Last four digits Required"]`).should("be.visible")
  }
}
