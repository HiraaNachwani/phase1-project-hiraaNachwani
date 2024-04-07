const { homePage } = require("../pages/HomePage");
const { CreditCardPage } = require("../pages/creditCardPage");


describe('HSBC CreditCard Flow Test', () => {

    const homePageObject = new homePage();
    const creditCardPageObject = new CreditCardPage();
    let testData; // Declare testData variable

    // Before hook to launch the application and read testData
    before(() => {
        // changing display resolution to access element in fullscreen
        cy.viewport(1920, 1080);

        // Read testData from the fixture file
        cy.fixture('testData.json').then(data => {
            testData = data; // Assign testData to the data read from fixture file

            // 1. Open the application
            homePageObject.launchApplication(testData.url);
        });
    });

    it('should verify HSBC CreditCard Flow Test Scenario', () => {
        // Use the testData object obtained from the before hook

        // 2. Hover cursor on Banking menu navigation
        homePageObject.mouseHoverOnBanking();

        // 3. Click on Credit Cards link
        homePageObject.clickCreditCardLink();

        // 4. Validate Credit Card as a header text
        creditCardPageObject.verifyCreditCardHeader();

        // 5. Validate Apply Now button
        creditCardPageObject.verifyApplyNowButton();

        // 6. Check there are three types of Credit Card options are available
        creditCardPageObject.verifyTotalNumberOfCreditCard(3);

        // 7. Validate first credit Card image attribute is HSBC Visa Cashback Credit Card
        creditCardPageObject.verifyFirstCreditCardImgAttribute('HSBC Visa Cashback Credit Card');

        // 8. Validate first credit Card header text is HSBC Cashback Credit Card
        creditCardPageObject.verifyFirstCreditCardHeaderText('HSBC Cashback Credit Card');

        // 9. Validate first credit Card has attached Compare cards button
        creditCardPageObject.verifyFirstCreditCardCompareButton();

        // 10. Validate first credit Card has attached Find out more button
        creditCardPageObject.verifyFirstCreditCardFindOutMoreButton();

        // 11. Validate first credit Card has attached Apply now button
        creditCardPageObject.verifyFirstCreditCardApplyNowButton();

        // 12. Click on First Credit card’s Compare cards button
        creditCardPageObject.clickFirstCreditCardCompareButton();

        // 13. Validate the new pop up has a close button
        creditCardPageObject.verifyPopUpCloseButton();

        // 14. Validate Select cards to compare is header of the pop up
        creditCardPageObject.verifySelectCardsHeader();

        // 15. Check that there are three credit cards options are available in the pop up to compare
        creditCardPageObject.verifyTotalCheckBoxOptions(3);

        // 16. Check first and second Credit Card checkbox to compare
        creditCardPageObject.clickCheckBox(0); // Select the first checkbox
        creditCardPageObject.clickCheckBox(1); // Select the second checkbox

        // 17. Click on Compare button
        creditCardPageObject.clickCompareButton();

        // 18. Validate total two credit cards have been selected
        creditCardPageObject.verifyTotalComparedCards(2);

        // 19. Validate two remove links are present for both the credit card
        creditCardPageObject.verifyTotalRemoveCardsbutton(2);

        // 20. Click on Add card link
        creditCardPageObject.clickFirstAddCardLink();

        // 21. Add third credit card checkbox to compare
        creditCardPageObject.clickCheckBox(2); // Select the third checkbox
        creditCardPageObject.clickCompareButton();

        // 22. Now validate total three credit cards have been selected
        creditCardPageObject.verifyTotalComparedCards(3);

        // 23. Validate total three remove links are present
        creditCardPageObject.verifyTotalRemoveCardsbutton(3);

        // 24. Now click on any remove link out of three
        creditCardPageObject.clickRemoveCardLink(1);

        // 25. Now only two credit card options should available in the page
        creditCardPageObject.verifyTotalComparedCards(2);

        // 26. Again click on Add card link
        creditCardPageObject.clickFirstAddCardLink();

        // 27. In pop-up, click on close button
        creditCardPageObject.clickPopUpCloseButton();

        // 28 The pop-up should close successfully
        creditCardPageObject.verifyPopUpCloseButtonIsNotVisible();
    });
});
