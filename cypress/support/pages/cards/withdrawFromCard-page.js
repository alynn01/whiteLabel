export class WithdrawalPage {
  moreOptionsDropdown = () => cy.get("app-dropdown-icon > #dropdownchildsmall");
  withdrawFromCardDropdownItem = () =>
    cy.get(`[id='dropdownchildsmall']`).contains(" Withdraw from card ");
  pageTitle = () => cy.get(`[class='cardTitle']`);
  walletDropdown = () =>
    cy.get(
      '[style="z-index: 11;"] > .dropdown-list > .dropdown > app-dropdown-icon > #dropdownchild'
    );
  accountDropdownItem = () =>
    cy.get(`[id='dropdownchild']`).contains(" USD - 6122256485 ");
  cardDropdown = () =>
  cy.get('[style="z-index: 8;"] > .dropdown-list > .dropdown > app-dropdown-icon > #dropdownchild');
  cardLastFourDropdownItem = () => cy.get(`[id='dropdownchild']`);
  amountEntryField = () => cy.get(".form-input > .formInput");

  withdrawAmountButton = () =>
    cy.get(`[class='formButton']`).contains(" Withdraw amount ");

  toggleButton = () => cy.get("toggle-icon > .toggle-wrapper");

  accessWithdrawFromCardPage() {
    this.moreOptionsDropdown().click({ force: true });
    this.withdrawFromCardDropdownItem().click();
    this.pageTitle()
      .contains("Withdraw From Physical Card")
      .should("be.visible");
  }

  enterWithdrawalDetails() {
    this.walletDropdown().click({ force: true });
    this.accountDropdownItem().click();
    cy.wait(3000)
    this.cardDropdown().click();
    this.cardLastFourDropdownItem().contains("8852").click();
    this.amountEntryField().type("1");
    this.withdrawAmountButton().should("be.visible");
  }

  withdrawFromVirtualCard() {
    this.toggleButton().click({ force: true });
    this.moreOptionsDropdown().click({ force: true });
    this.withdrawFromCardDropdownItem().click();
    this.pageTitle()
      .contains("Withdraw From Virtual Card")
      .should("be.visible");
    this.walletDropdown().click({ force: true });
    this.accountDropdownItem().click();
    cy.wait(3000)
    this.cardDropdown().click({ force: true });
    this.cardLastFourDropdownItem().contains("0034").click();
    this.amountEntryField().type("1");
    this.withdrawAmountButton().should("be.visible");
  }
}
