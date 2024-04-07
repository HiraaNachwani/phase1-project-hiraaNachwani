export class basePage {

    // Method to scroll to the bottom of the page
    scrollToBottom() {
        cy.scrollTo('bottom');
    }

    // Method to verify that the current URL contains the specified text
    // @param url: The text to verify if it is contained in the URL
    verifyUrlContainsText(url){
        cy.url().should('include', url);
    }
}
