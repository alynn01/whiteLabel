export class ProfilePage{
    profileMenuItem = () => cy.get('.app-onboarding-menu-profile > .nav-icon').contains('Profile');
    profilePageMessage = () => cy.get('.sub-title').contains('View your profile information');
    userFirstName = () => cy.get('.kyc-tag-wrapper > .kyc-tag-text').contains(' Verified ')


    accessProfilePage(){
        this.profileMenuItem().click({force : true})
        this.profilePageMessage().should('be.visible')
        this.userFirstName().should('be.visible')
    }
}