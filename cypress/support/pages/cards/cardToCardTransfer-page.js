export class CardToCardTransferPage{
    moreOptionsDropdown = () => cy.get("app-dropdown-icon > #dropdownchildsmall");
  cardToCardTransferDropdownItem = () =>
    cy.get(`[id='dropdownchildsmall']`).contains(" Card to card transfer ");
  pageTitle = () => cy.get(`[class='cardTitle']`);
  cardDropdown = () => cy.get('app-dropdown-icon > #dropdownchild');
  clientIdentification = () => cy.get('.cardRow > :nth-child(2) > .formInputWrapper');
  lastFourDigits = () => cy.get('.cardRow > :nth-child(4) > .formInputWrapper');
  accountDropdownItem = () =>
    cy.get(`[id='dropdownchild']`).contains(" USD - 6122256485 ");
  cardLastFourDropdownItem = () => cy.get(`[id='dropdownchild']`);
  amountEntryField = () => cy.get(':nth-child(1) > .cardRow > form-input-large > .formInputWrapper');

  transferAmountButton = () =>
    cy.get(`[class='formButton']`).contains(" Transfer ");

  toggleButton = () => cy.get("toggle-icon > .toggle-wrapper");

  accessCardToCardTransferPage() {
    this.moreOptionsDropdown().click({ force: true });
    this.cardToCardTransferDropdownItem().click();
    this.pageTitle()
      .contains("Card to card transfer")
      .should("be.visible");
  }

  enterTransferDetails(){
    this.cardDropdown().click({force : true})
    this.cardLastFourDropdownItem().contains("7241").click();
    this.amountEntryField().type('1')
    this.clientIdentification().type('12707634')
    this.lastFourDigits().type('0032')
    this.transferAmountButton().should('be.visible')

  }
}