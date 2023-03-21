export class FundUserPage{
    walletMenuItem = () => cy.get('[href="/dashboard/wallet"] > span');
    quickActionDropdown = () => cy.get(`[class*="placeholder"]`).contains("Quick actions");
    fundUserDropdownItem = () => cy.get('.sc-csuSiG > :nth-child(2)').contains('Fund users')
    popupHeader = () => cy.get('.modal-header-content > span').contains('Fund user accounts')
    programDropdown = () => cy.get('.jhLczD > .sc-jrcTuL > .sc-kDvujY > .control-value');
    selectProgram = () => cy.get('.sc-csuSiG > :nth-child(2)');
    enterAmount = () => cy.get(':nth-child(4) > .sc-khsqcC > div > .sc-hTBuwn');
    fundProgramButton = () => cy.get('.button-text').contains('Fund program');
    selectAcctNumber = () => cy.get('.cwyUru > .sc-jrcTuL > .sc-kDvujY > .control-value');
    pickAccount = () => cy.get('.sc-csuSiG > :nth-child(3)');

    accessFundUserPopup(){
        this.walletMenuItem().click()
        this.quickActionDropdown().click()
        this.fundUserDropdownItem().click()
        this.popupHeader().should('be.visible')

    }

    enterFundDetails(){
      this.programDropdown().click()
      this.selectProgram().click()
      this.selectAcctNumber().click()
      this.pickAccount().click()
      this.enterAmount().type('1')
    }
}