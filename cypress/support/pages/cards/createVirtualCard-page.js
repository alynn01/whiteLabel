export class CreateVirtualCardPage{
    cardMenuItem = () => cy.get('.app-onboarding-menu-cards > .nav-icon').contains('Cards');
    toggleButton = () => cy.get('toggle-icon > .toggle-wrapper');
    createVirtualCardButton = () => cy.get('.page-account-number > .formButton').contains(' Create virtual card ');
    yesContinueButton = () => cy.get('.startDeleteCardButtonWrapper > :nth-child(2)').contains(' Yes, continue ');
    popUpMessage = () => cy.get('.otp-message').contains(' How do you want to receive your OTP? ');
    proceedButton = () => cy.get('.modal-footer-content > .formButton').contains(' Proceed ');


    createCard(){
        this.cardMenuItem().click();
        this.toggleButton().click({force : true})
        this.createVirtualCardButton().click({force : true})
        this.yesContinueButton().click({force : true})
        this.popUpMessage().should('be.visible') 
        this.proceedButton().should('be.visible')  
    }

}