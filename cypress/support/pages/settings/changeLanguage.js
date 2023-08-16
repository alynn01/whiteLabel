export class SettingsPage{
    profilePageMenuItem = () => cy.get('.app-onboarding-menu-settings > .nav-icon');
    changeLanguageDropdown = () => cy.get('.pagination-icon');
    pageMessage = () => cy.get('.sub-title').contains('Make changes to your account')
    chooseFrench = () => cy.get(':nth-child(3) > .selector-title_dropdown_list_single').contains(' French ')
    cardTitle = () => cy.get('[class="card-title"]').contains(' Choisissez la langue par défaut ')
    slideToSettings = () => cy.get('h4');

    accessPage(){
        this.profilePageMenuItem().contains('Settings').click({force : true})
        this.pageMessage().should('be.visible')
    }

    changeLanguage(){
        this.slideToSettings().contains('OTHERS').click();
        this.changeLanguageDropdown().click()
        this.chooseFrench().click()
        this.profilePageMenuItem().contains('Réglages').click({force : true})
       // this.slideToSettings().contains('AUTRES').click();
        // this.slideToSettings().contains('AUTRES').click();
        //this.cardTitle().should('be.visible')
    }
}