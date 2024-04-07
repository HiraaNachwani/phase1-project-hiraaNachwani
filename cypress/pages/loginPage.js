// LoginPage class representing operations on the login page
export class loginPage {

    // CSS selectors for elements on the login page

    // CSS selector for the Continue button
    continueButton = "button[name='continue']";

    // CSS selector for the username input field
    username = "#username";

    // CSS selector for the Remember Me checkbox
    chkRememberMe = "#rememberMe";

    // CSS selector for the tooltip icon
    icnToolTip ="#username_help_link > [role='text'] > .icon";

    // CSS selector for the close button on the popup
    icnPopUpCrossButton ="div.modal-dialog.custom-dialog.slide-content.help-without-scroll.helpClicked span.icon.icon-delete";


    // Method to verify the presence of the Log On header
    verifyLogOnHeader() {
        cy.contains('span', 'Log On').should('exist');
    }

    // Method to verify the existence of the Continue button
    verifyContinueButtonIsExist() {
        cy.get(this.continueButton).should('exist');
    }

    // Method to verify that the Continue button is disabled
    verifyContinueButtonIsDisabled() {
        cy.get(this.continueButton).should('be.disabled');
    }

    // Method to set the username in the input field
    // @param username: The username to set
    setUserName(username) {
        cy.get(this.username).type(username);
    }

    // Method to verify that the Continue button is enabled
    verifyContinueButtonIsEnabled() {
        cy.get(this.continueButton).should('be.enabled');
    }

    // Method to verify that the Remember Me checkbox is unchecked
    verifyRememberMeCheckBoxIsUnchecked() {
        cy.get(this.chkRememberMe).should('not.be.checked');
    }

    // Method to verify the presence of the tooltip
    verifyToolTipIsExist() {
        cy.get(this.icnToolTip).should('exist');
    }

    // Method to click on the tooltip
    clickToolTip() {
        cy.get(this.icnToolTip).click();
    }

    // Method to verify the presence of the username header on the popup
    verifyUserNameHeaderOnPopUp() {
        cy.contains('span', 'Username').should('exist');
    }

    // Method to verify the presence of the close icon on the popup
    verifyPopUpCrossIconIsExist() {
        cy.get(this.icnPopUpCrossButton).should('exist');
    }

    // Method to click on the close icon on the popup
    clickOnPopUpCrossIcon() {
        cy.get(this.icnPopUpCrossButton).click();
    }
}
