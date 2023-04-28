export class LoadCardPage {
  moreOptionsDropdown = () => cy.get("app-dropdown-icon > #dropdownchildsmall");
  loadCardDropdownItem = () =>
    cy.get(`[id='dropdownchildsmall']`).contains(" Load card ");
  loadCardPageTitle = () =>
    cy.get(`[class='cardTitle']`);
  walletDropdown = () =>
    cy.get(
      '[style="z-index: 11;"] > .dropdown-list > .dropdown > app-dropdown-icon > #dropdownchild'
    );
  accountDropdownItem = () =>
    cy.get(`[id='dropdownchild']`).contains(" USD - 6122256485 ");
  cardDropdown = () =>
    cy.get(
      '[style="z-index: 8;"] > .dropdown-list > .dropdown > app-dropdown-icon > #dropdownchild'
    );
  cardLastFourDropdownItem = () =>
    cy.get(`[id='dropdownchild']`);
  amountEntryField = () =>
    cy.get(".form-input > .formInput");

  addAmountButton = () => cy.get(`[class='formButton']`).contains(' Add amount ')

  toggleButton = () => cy.get('toggle-icon > .toggle-wrapper');


  accessLoadCardPage() {
    this.moreOptionsDropdown().click({ force: true });
    this.loadCardDropdownItem().click();
    this.loadCardPageTitle().contains("Load Physical Card").should("be.visible");
  }

  loadPhysicalCard() {
    this.walletDropdown().click({ force: true });
    this.accountDropdownItem().click();
    cy.wait(5000)
    this.cardDropdown().click();
    cy.wait(4000)
    this.cardLastFourDropdownItem().contains("8852").click();
    cy.wait(3000)
    this.amountEntryField().type("100000");
    this.addAmountButton().click();
    cy.contains("Insufficient funds, top up wallet balance").should("be.visible")
  }

  loadPhysicalCardWithoutAmount() {
    this.walletDropdown().click({ force: true });
    this.accountDropdownItem().click();
    cy.wait(5000)
    this.cardDropdown().click();
    cy.wait(4000)
    this.cardLastFourDropdownItem().contains("8852").click();
    this.addAmountButton().click();
    cy.get(`input[placeholder="Amount Required"]`).should("be.visible")
  }

  loadPhysicalCardWithoutCardDetails() {
    this.walletDropdown().click({ force: true });
    this.accountDropdownItem().click();
    cy.wait(3000)
    this.amountEntryField().type("100000");
    this.addAmountButton().click();
    cy.contains("Card Required").should("be.visible")
  }

  loadPhysicalCardWithoutWalletDetails() {
    cy.wait(3000)
    this.amountEntryField().type("100000");
    this.addAmountButton().click();
    cy.contains("Card Required").should("be.visible")
    cy.contains("Wallet Required").should("be.visible")
  }

  loadVirtualCard(){
    cy.wait(5000)
    this.toggleButton().click({force : true})
    this.moreOptionsDropdown().click({ force: true });
    this.loadCardDropdownItem().click();
    this.loadCardPageTitle().contains("Load Virtual Card").should("be.visible");
    cy.wait(3000)
    this.walletDropdown().click({ force: true });
    cy.wait(3000)
    this.accountDropdownItem().click();
    cy.wait(3000)
    this.cardDropdown().click({ force: true });
    this.cardLastFourDropdownItem().contains("0034").click();
    this.amountEntryField().type("1000000");
    this.addAmountButton().click()
    cy.contains("Insufficient funds, top up wallet balance").should("be.visible")
  }

  loadVirtualCardWithoutAmount(){
    cy.wait(5000)
    this.toggleButton().click({force : true})
    this.moreOptionsDropdown().click({ force: true });
    this.loadCardDropdownItem().click();
    this.loadCardPageTitle().contains("Load Virtual Card").should("be.visible");
    cy.wait(3000)
    this.walletDropdown().click({ force: true });
    cy.wait(3000)
    this.accountDropdownItem().click();
    cy.wait(3000)
    this.cardDropdown().click({ force: true });
    this.cardLastFourDropdownItem().contains("0034").click();
    this.addAmountButton().click()
    cy.get(`input[placeholder="Amount Required"]`).should("be.visible")
  }
}
