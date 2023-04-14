export class SettingsPage{
    profilePageMenuItem = () => cy.get('.app-onboarding-menu-settings > .nav-icon').contains('Settings')
    changeLanguageDropdown = () => cy.get('.pagination-icon');
    pageMessage = () => cy.get('.sub-title').contains('Make changes to your account')
    chooseFrench = () => cy.get(':nth-child(3) > .selector-title_dropdown_list_single').contains(' French ')
    cardTitle = () => cy.get('[class="card-title"]').contains(' Choisissez la langue par défaut ')

    accessPage(){
        this.profilePageMenuItem().click({force : true})
        this.pageMessage().should('be.visible')
    }

    changeLanguage(){
        this.changeLanguageDropdown().click()
        this.chooseFrench().click()
        this.cardTitle().should('be.visible')
    }
}