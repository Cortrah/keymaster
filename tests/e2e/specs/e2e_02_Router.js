describe("Using urls and the browser history for navigation", function() {

    it('Navigates to the Edit Owner State of "FriendService" via an edit button', function() {
        cy.visit('/');
        // click the edit button of OP_DEV
        cy.get('#editOwnerItemBtn_3').click();
        cy.get('#ownerList').should('not.exist');
        cy.get('#editOwner').should('be.visible');
        // check that the ownerId is 3
        cy.url().should('include','/owner/3');
        // and that this is the "FriendService" owner
        cy.get('#ownerNameInput').should('have.value','FriendService');
    });

    it('Navigates to the Edit Owner State of "PlaceService" by changing the url id to 4', function() {
        cy.visit('/#/owner/4');
        // check that the ownerId is 4
        cy.url().should('include','/owner/4');
        // and that this is the "PlaceService" owner
        cy.get('#ownerNameInput').should('have.value','PlaceService');
    });

    it('Goes to the list of owners if you click on the Owners tag in the breadcrumbs', function() {
        cy.get('#viewOwnerListBtn').click();
        cy.get('#editOwner').should('not.exist');
        cy.get('#ownerList').should('be.visible');
    });

    it('Goes back to editing the Place Service owner if you click on the browsers back button', function() {
        // use the back button to go back to the item
        cy.go('back');
        cy.get('#ownerList').should('not.exist');
        cy.get('#editOwner').should('be.visible');
        cy.get('#ownerNameInput').should('have.value','PlaceService');
    })
});

