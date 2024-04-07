// HomePage class representing operations on the home page
export class homePage {

    // CSS selectors for elements on the home page

    // XPath for the home page logo
    homePage_logo = "//div[@class='header-logo lg-2']";

    // CSS selector for the Log On button
    homePage_logOnButton = "li > div > a.selected-item.login-button.only-one-link";

    // XPath for the "Find your nearest HSBC branch or ATM" link in the footer navigation
    linkFindNearestAtm = "//nav[@aria-label='Main Footer Navigation']//a[contains(text(),'Find your nearest HSBC branch or ATM')]";

    // XPath for the "Privacy Statement" link on the home page
    linkPrivacyStatement = "//div[@class='row wrapper']//a[text()='Privacy Statement']";

    // XPath for the Banking section in the header
    headerBanking = "//div[@class='header-logo lg-2']//following-sibling::nav//span[text()='Banking']";

    // XPath for the Credit Card link in the Banking section
    linkCreditCard = "//div[@class='header-logo lg-2']//following-sibling::nav//a[@href='https://www.hsbc.co.in/credit-cards/']";

    // Method to launch the application
    // @param url: The URL of the application to launch
    launchApplication(url) {
        cy.visit(url);
    }

    // Method to click the logo
    clickLogo() {
        cy.xpath(this.homePage_logo).click();
    }

    // Method to verify the presence of the logo
    verifyLogoExist() {
        cy.xpath(this.homePage_logo).should('be.visible');
    }

    // Method to verify the title of the home page
    // @param title: The expected title of the home page
    verifyHomePageTitle(title) {
        cy.title().should('eq', title);
    }

    // Method to click on the Log On button
    clickLogOn() {
        cy.get(this.homePage_logOnButton).click();
        cy.wait(2000);
    }

    // Method to click on the "Find your nearest HSBC branch or ATM" link
    clickFindNearestATM() {
        cy.xpath(this.linkFindNearestAtm).click();
    }

    // Method to click on the "Privacy Statement" link
    clickPrivacyStatement() {
        cy.xpath(this.linkPrivacyStatement).click();
    }

    // Method to perform mouse hover on the Banking section
    mouseHoverOnBanking() {
        cy.xpath(this.headerBanking).trigger('mouseover');
        cy.wait(2000);
    }

    // Method to click on the Credit Card link within the Banking section
    clickCreditCardLink() {
        cy.xpath(this.linkCreditCard)
            .invoke('show') // Ensure the element is visible
            .click({ force: true }); // Forcefully click the element
    }
}
