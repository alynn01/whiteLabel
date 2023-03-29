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
    cy.get(`[id='dropdownchild']`).contains(" USD - 5221323472 ");
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
    this.cardDropdown().click({ force: true });
    this.cardLastFourDropdownItem().contains("8852").click();
    this.amountEntryField().type("1");
    this.addAmountButton().should('be.visible')
  }

  loadVirtualCard(){
    this.toggleButton().click({force : true})
    this.moreOptionsDropdown().click({ force: true });
    this.loadCardDropdownItem().click();
    this.loadCardPageTitle().contains("Load Virtual Card").should("be.visible");
    cy.wait(3000)
    this.walletDropdown().click({ force: true });
    this.accountDropdownItem().click();
    this.cardDropdown().click({ force: true });
    this.cardLastFourDropdownItem().contains("0034").click();
    this.amountEntryField().type("1");
    this.addAmountButton().should('be.visible')
  }
}
