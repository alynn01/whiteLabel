export class CardsPage{
 cardMenuItem = () => cy.get('.app-onboarding-menu-cards > .nav-icon').contains('Cards');
 cardPageMessage = () => cy.get('.sub-title').contains('View all activites on your cards');
 cardNumber = () => cy.get('.default-page_text').contains("No USD physical cards added")
 toggleButton = () => cy.get('toggle-icon > .toggle-wrapper');
 viewCardDetailsButton = () => cy.get("div[id='1'] div[class='card-detail-wrapper']").contains('View card details');
 cardEmailAddress = () => cy.get('#email > #wallet > .cardRow > .wallets_single').contains('via email')
 proceedButtonm = () => cy.get('.modal-footer-content > .formButton');
 virtualCardNumber = () => cy.get('.cardNumber').contains(6316)


 accessCardsPage(){
    this.cardMenuItem().click();
    this.cardPageMessage().should('be.visible');
    cy.wait(3000)
    cy.contains("0577").should('be.visible');
 }

 viewVirtualCards(){
    this.cardMenuItem().click();
    cy.wait(5000)
    this.toggleButton().click()
    this.viewCardDetailsButton().should('be.visible')
    this.virtualCardNumber().should('be.visible')
    
 } 

}