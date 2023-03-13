export class CardsPage{
 cardMenuItem = () => cy.get('.app-onboarding-menu-cards > .nav-icon').contains('Cards');
 cardPageMessage = () => cy.get('.sub-title').contains('View all activites on your cards/wallet');
 cardNumber = () => cy.get('.cardNumber').contains(8852)
 toggleButton = () => cy.get('toggle-icon > .toggle-wrapper');
 viewCardDetailsButton = () => cy.get("div[id='1'] div[class='card-detail-wrapper']").contains('View card details');
 cardEmailAddress = () => cy.get('#email > #wallet > .cardRow > .wallets_single').contains('via email')
 proceedButtonm = () => cy.get('.modal-footer-content > .formButton');


 accessCardsPage(){
    this.cardMenuItem().click();
    this.cardPageMessage().should('be.visible');
    cy.wait(3000)
    this.cardNumber().should('be.visible');
 }

 viewVirtualCards(){
    this.toggleButton().click({force : true})
    this.viewCardDetailsButton().click({force : true})
    this.cardEmailAddress().should('be.visible')  
    this.proceedButtonm().click({force : true})
 } 

}