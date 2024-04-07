// privacyStatementPage class representing operations on the privacy statement page
export class privacyStatementPage {

    // XPath selector for the privacy statement header
    headerPrivacyStatment = "//h1[contains(text(),'Privacy Statement')]";

    // Method to verify the presence of the privacy statement header
    verifyPrivacyStatementHeader() {
        cy.xpath(this.headerPrivacyStatment).should('exist');
    }
}
