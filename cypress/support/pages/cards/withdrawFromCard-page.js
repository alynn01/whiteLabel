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
    cy.wait(6000)
    this.cardDropdown().click();
    cy.wait(3000)
    this.cardLastFourDropdownItem().contains("8852").click();
    this.amountEntryField().type("100000");
    this.amountEntryField().type("1000000");
    this.withdrawAmountButton().click();
    cy.contains("Insufficient funds, top up card balance").should("be.visible")
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

    cy.wait(6000)
    this.cardDropdown().click({ force: true });
    cy.wait(3000)
    this.cardLastFourDropdownItem().contains("0034").click();
    this.amountEntryField().type("1");
    this.withdrawAmountButton().should("be.visible");

  }
  enterWithdrawalDetailsWithoutAmount() {
    this.walletDropdown().click({ force: true });
    this.accountDropdownItem().click();
    cy.wait(6000)
    this.cardDropdown().click();
    this.cardLastFourDropdownItem().contains("8852").click();
    this.withdrawAmountButton().click();
    cy.get(`input[placeholder="Amount Required"]`).should("be.visible")
  }
  enterWithdrawalDetailsWithoutSelectingCard() {
    this.walletDropdown().click({ force: true });
    this.accountDropdownItem().click();
    cy.wait(6000)
    // this.cardDropdown().click();
    // this.cardLastFourDropdownItem().contains("8852").click();
    this.amountEntryField().type("1");
    this.withdrawAmountButton().click();
    cy.contains("Card Required").should("be.visible")
  }
  enterWithdrawalDetailsWithoutSelectingWallet() {
    // this.walletDropdown().click({ force: true });
    // this.accountDropdownItem().click();
    // cy.wait(6000)
    this.cardDropdown().click();
    this.cardLastFourDropdownItem().contains("8852").click({ force: true });
    this.amountEntryField().type("1");
    this.withdrawAmountButton().click();
    cy.contains("Wallet Required").should("be.visible")
   
  }
}

