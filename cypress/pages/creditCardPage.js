// CreditCardPage class representing operations on the credit card page
export class CreditCardPage {

    // XPath for the header indicating the credit card section
    headerCreditCard = "//h1[contains(text(),'Credit cards')]";

    // XPath for the "Apply now" button
    buttonApplyNow = "//a[@class='A-BTNP-RW-ALL']/span[text()='Apply now']";

    // XPath for the list of credit cards displayed on the page
    listCreditCards = "//section[@class='O-ADVPRDMOD-RW-DEV O-SMARTSPCGEN-DEV']";

    // XPath for the image of the first credit card in the list
    firstCreditCardImg = "//section[@class='O-ADVPRDMOD-RW-DEV O-SMARTSPCGEN-DEV']//img";

    // XPath for the header of the first credit card in the list
    firstCreditCardHeader = "//section[@class='O-ADVPRDMOD-RW-DEV O-SMARTSPCGEN-DEV']//h2";

    // XPath for the "Compare cards" button of the first credit card in the list
    buttonFirstCreditCardCompare = "//section[@class='O-ADVPRDMOD-RW-DEV O-SMARTSPCGEN-DEV']//span[text()='Compare cards']";

    // XPath for the "Find out more" button of the first credit card in the list
    buttonFirstCreditCardFindOutMore = "//section[@class='O-ADVPRDMOD-RW-DEV O-SMARTSPCGEN-DEV']//span[text()='Find out more']";

    // XPath for the "Apply now" button of the first credit card in the list
    buttonFirstCreditCardApplyNow = "//section[@class='O-ADVPRDMOD-RW-DEV O-SMARTSPCGEN-DEV']//span[text()='Apply now']";

    // XPath for the close button of any pop-up
    buttonPopUpClose = "//button[@class='close-button']";

    // XPath for the header indicating the select cards section for comparison
    headerSelectCards = "//h2[text()='Select cards to compare']";

    // XPath for the checkboxes corresponding to each credit card for comparison
    checkboxCards = "//div[@role='checkbox']";

    // XPath for the "Compare" button for comparing selected credit cards
    buttonCompare = "//button[@class='A-BTNP-RW-ALL']";

    // XPath for the section containing the compared cards
    listComparedCards = "//div[@class='product-select']";

    // XPath for the "Remove card" links for each compared card
    listRemoveCardsLink = "//span[text()='Remove card']";

    // XPath for the "Add card" link for adding additional cards for comparison
    linkFirstAddCard = "//span[text()='Add card']";

    // Method to verify the presence and visibility of the credit card section header
    verifyCreditCardHeader() {
        cy.xpath(this.headerCreditCard)
            .should('exist')
            .should('be.visible');
    }

    // Method to verify the presence, visibility, and enabled state of the "Apply now" button
    verifyApplyNowButton() {
        cy.xpath(this.buttonApplyNow)
            .should('be.visible') // Verify that the element is visible
            .should('not.have.attr', 'disabled'); // Verify that the element is not disabled

    }

    // Method to verify the total number of displayed credit cards
    verifyTotalNumberOfCreditCard(num) {
        cy.xpath(this.listCreditCards)
            .its('length')
            .should('eq', num);
    }

    // Method to verify the alt attribute of the first credit card image
    verifyFirstCreditCardImgAttribute(text) {
        cy.xpath(this.firstCreditCardImg)
            .first() // Select the first matching element
            .invoke('attr', 'alt') // Retrieve the 'alt' attribute value
            .should('contain', text);
    }

    // Method to verify the text of the header of the first credit card
    verifyFirstCreditCardHeaderText(text) {
        cy.xpath(this.firstCreditCardHeader)
            .first() // Select the first matching element
            .invoke('text') // Retrieve the 'alt' attribute value
            .should('contain', text);
    }

    // Method to verify the presence and visibility of the "Compare cards" button for the first credit card
    verifyFirstCreditCardCompareButton() {
        cy.xpath(this.buttonFirstCreditCardCompare)
            .first() // Select the first matching element
            .should('be.visible'); // Assert that the element is visible
    }

    // Method to verify the presence and visibility of the "Find out more" button for the first credit card
    verifyFirstCreditCardFindOutMoreButton() {
        cy.xpath(this.buttonFirstCreditCardFindOutMore)
            .first() // Select the first matching element
            .should('be.visible'); // Assert that the element is visible
    }

    // Method to verify the presence and visibility of the "Apply now" button for the first credit card
    verifyFirstCreditCardApplyNowButton() {
        cy.xpath(this.buttonFirstCreditCardApplyNow)
            .first() // Select the first matching element
            .should('be.visible'); // Assert that the element is visible
    }

    // Method to click the "Compare cards" button for the first credit card
    clickFirstCreditCardCompareButton() {
        cy.xpath(this.buttonFirstCreditCardCompare)
            .first() // Select the first matching element
            .click(); // click the element
    }

    // Method to verify the presence and visibility of the close button of any pop-up
    verifyPopUpCloseButton() {
        cy.xpath(this.buttonPopUpClose)
            .should('be.enabled')
            .should('be.visible');

    }

    // Method to verify the presence and visibility of the header indicating the select cards section for comparison
    verifySelectCardsHeader() {
        cy.xpath(this.headerSelectCards)
            .should('exist')
            .should('be.visible');
    }

    // Method to verify the total number of checkbox options available for comparison
    verifyTotalCheckBoxOptions(num) {
        cy.xpath("//div[@role='checkbox']")
            .its('length')
            .should('eq', num);
    }

    // Method to click a checkbox based on its index
    clickCheckBox(num) {
        cy.xpath(this.checkboxCards)
            .eq(num) // Select the first checkbox
            .click(); // Check the checkbox
    }

    // Method to click the "Compare" button for comparing selected credit cards
    clickCompareButton() {
        cy.xpath(this.buttonCompare).click();
        cy.wait(3000);
    }

    // Method to verify the total number of compared cards after comparison
    verifyTotalComparedCards(num) {
        cy.xpath(this.listComparedCards)
            .its('length')
            .should('eq', num);
    }

    // Method to verify the total number of "Remove card" buttons for removing compared cards
    verifyTotalRemoveCardsbutton(num) {
        cy.xpath(this.listRemoveCardsLink)
            .its('length')
            .should('eq', num);
    }

    // Method to click the "Add card" link for adding additional cards for comparison
    clickFirstAddCardLink() {
        cy.xpath(this.linkFirstAddCard)
            .first()
            .click();
    }

    // Method to click the "Remove card" link based on its index for removing a compared card
    clickRemoveCardLink(num) {
        cy.xpath(this.listRemoveCardsLink)
            .eq(num)
            .click();
        cy.wait(3000);
    }

    // Method to click the close button of any pop-up
    clickPopUpCloseButton() {
        cy.xpath(this.buttonPopUpClose)
            .click();
    }

    // Method to verify that the close button of any pop-up is not visible
    verifyPopUpCloseButtonIsNotVisible() {
        cy.xpath(this.buttonPopUpClose)
            .should('not.be.visible');
    }
}
