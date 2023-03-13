export class ActivatePhysicalCardPage{
    activatePhysicalCardButton = () => cy.get('.page-account-number > .formButton').contains(' Activate physical card ')
    clientIdentification = () => cy.get(':nth-child(1) > .cardRow > form-input-large > .formInputWrapper');
    lastFourDigits = () => cy.get(':nth-child(2) > .cardRow > form-input-large > .formInputWrapper');
    activateCardButton = () =>
    cy.get(`[class='formButton']`).contains(" Activate physical card ");
    pageTitle = () => cy.get(`[class='cardTitle']`).contains('Activate Physical Card');

    enterCardActivationDetails(){
        this.activatePhysicalCardButton().click({force : true});
        this.pageTitle().should('be.visible');
        this.clientIdentification().type('23456789');
        this.lastFourDigits().type('0032');
        this.activateCardButton().should('be.visible')

    }
}