export class atmPage {

    // XPath for the "Branch & ATM Locator" button
    buttonBranchAndAtmLocator = "//span[text()='Branch & ATM Locator']";

    // XPath for the input field for searching ATMs and branches
    inputSearchAtmANdBranch = "//input[@role='combobox']";

    // CSS selector for the suggestion list
    list_suggestion = ".yrcka0mz78qjZ9HENtaT";

    // CSS selector for the suggestion items
    list_suggestionItems = ".P_iZY4cTwOw6H4ezGjfT";

    // XPath for the text result
    textResult = "//ul[@class='Hpg0JwLRv6K46BiIEAil']//p[@class='uItFVQvJsoQVBXhG5ERC']";

    // XPath for the "Show more results" button
    buttonShowMoreResult = "//button[@aria-label='Show more results']";

    // XPath for the list of tooltips
    listToolTips = "//ul[@class='Hpg0JwLRv6K46BiIEAil']//span[@class='yWQITJvVOSElgOOsYgyM']";

    // XPath for the Instagram link
    linkInstagram = "//a[@class='social-image social-icon-instagram']";

    // XPath for the Facebook link
    linkFacebook = "//a[@class='social-image social-icon-facebook']";

    // XPath for the Twitter link
    linkTwitter = "//a[@class='social-image social-icon-twitter']";

    // XPath for the Youtube link
    linkYoutube = "//a[@class='social-image social-icon-youtube']";


    // Method to verify the presence of the "Branches & ATMs" header
    verifyAtmAndBranchHeader() {
        cy.contains('h1', 'Branches & ATMs').should('exist');
    }

    // Method to click on the "Branch & ATM Locator" button
    clickBranchAndAtmLocator() {
        cy.xpath(this.buttonBranchAndAtmLocator).click();
    }

    // Method to search for ATMs and branches
    searchAtmAndBranch(country) {
        cy.xpath(this.inputSearchAtmANdBranch).type(country);
    }

    // Method to select text from the suggestion
    selectTextFromSuggestion(country) {
        cy.get(this.list_suggestion).should('be.visible');
        cy.contains(this.list_suggestionItems, country).click();
    }

    // Method to verify text from the result
    verifyTextFromResult(searchResult) {
        cy.xpath(this.textResult)
            .invoke('text') // Retrieve the text content
            .should('contain', searchResult);
    }

    // Method to click the "Show more results" button
    clickShowMoreResult() {
        cy.xpath(this.buttonShowMoreResult).click();
    }

    // Method to verify tooltip for result
    verifyTootTipForResult() {
        cy.xpath(this.listToolTips)
            .eq(1) // Select the second item (index 1)
            .should('be.visible'); // Assert that it is visible

    }

    // Method to verify the visibility and enabled state of the Instagram option
    verifyInstagramOption() {
        cy.xpath(this.linkInstagram)
            .should('be.visible') // Verify that the element is visible
            .should('not.have.attr', 'disabled'); // Verify that the element is not disabled

    }

    // Method to verify the visibility and enabled state of the Facebook option
    verifyFacebookOption() {
        cy.xpath(this.linkFacebook)
            .should('be.visible') // Verify that the element is visible
            .should('not.have.attr', 'disabled'); // Verify that the element is not disabled

    }

    // Method to verify the visibility and enabled state of the Twitter option
    verifyTwitterOption() {
        cy.xpath(this.linkTwitter)
            .should('be.visible') // Verify that the element is visible
            .should('not.have.attr', 'disabled'); // Verify that the element is not disabled

    }

    // Method to verify the visibility and enabled state of the Youtube option
    verifyYoutubeOption() {
        cy.xpath(this.linkYoutube)
            .should('be.visible') // Verify that the element is visible
            .should('not.have.attr', 'disabled'); // Verify that the element is not disabled

    }


}
