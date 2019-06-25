import { getStore, getOwners, getActiveOwnerElements } from '../support/utils';

describe("Manage a list of Owners", function() {

    // 3 Active owners are initialized in main, 3 active owners and one inactive one are fetched in the LoadOwners command
    it('checks that each of the 6 active owners are rendered in the DOM, 1 inactive owner is not', function () {
        cy.server();
        cy.route('/','fixture:getOwnersOk.json').as('owners');
        cy.visit('/');
        getActiveOwnerElements().should('have.length', 6);
    });

    // it('checks that ReportService has 2 apikeys', function () {
    //     // get ReportService which is index 6, id 1
    //     let store =  getStore();
    //     console.log(store);
    //     //.its('state.owners');
    //     store.state.owners[6].apiKeys.length.should('equal', 2);
    // });

    // it('check that ReportService has 5 users', function () {
    //     let reportService =  getStore().its('state.getOwnerById(1)');
    //     reportService.ownerUsers.length.should('equal', 5);
    //  })

    // === Add an Owner with an existing name Fails ===
    // click the addOwnerBtn
    // check that the dialog exists
    // put in a new owner name
    // submit a name that exists
    // addOwnerFail.json
    // it should fail and we should get an error response

    // === Add an Owner with a unique name Succeeds ===
    // click the addOwnerBtn.
    // check that the dialog exists
    // check that we get a validation error if we try to click OK without a value
    // put in a new owner name
    // submit a new Owner that doesn't exist
    // check that we get a successful response
    // addOwnerOk.json
    // check that it's rendered
    // after a refresh, the same

    // === Edit an Owner Cancels ===
    // get the name of the owner for later
    // click the edit button
    // check that the name is in the edit field
    // edit the name of the owner
    // back to the root
    // check that if we don't press save and go back to the root, that it hasn't changed

    // === Edit an Owner Succeeds ===
    // use the back button to go back to the edit view
    // edit the name of the owner
    // press save
    // editOwnerOk.json
    // back to the root
    // that if we do press save and go back to the root that it has changed
    // after a refresh, the same

    // === Add an ApiKey Succeeds ===
    // click the edit button of our test item
    // click the add key button, send a request for a new key
    // addApiKeyOk.json
    // on success, add it and show it
    // after a refresh, the same

    // === Manage an ApiKey ===
    // check that part of it is shown
    // click on the expand button
    // check that all of it is shown
    // click on the retract button
    // check that part of it is shown
    // click the archive button

    // === Archive an ApiKey ===
    // get the count of active items
    // archive the new item
    // check the length of items is one less
    // archiveApiKeyOk.json
    // check that it is gone
    // after a refresh, the same

    // === Add a User ===
    // Click Add a User
    // enter a userName
    // press ok
    // if it's not a valid user name throw an error via local validation

    // if it is a valid user name and it doesn't exist, send it to the server
    // addUserOk.json
    // if we have a successful response, show it
    // after a refresh, the same

    // addUserFail.json
    // if it is a valid user name, but it exists "AlleyOop", throw an error from the server

    // === Archive a User ===
    // get the count of active items
    // archive the new item
    // check the length of items is one less

    // === Archive an Owner ===
    // get the count of active items
    // archive the new item
    // check the length of items is one less

    // === Add a Permission to a User (local only, server doesn't exist yet) ===
    // if you click add permission you get a modal
    // if it's not a valid permission name throw an error via local validation
    // if you enter a valid permission and press save it shows under the user
    // if you enter a permission and cancel it doesn't show under the user
    // if you click on the archive permission button the permission dissappears

    // === Archive a Permission (local only, server doesn't exist yet) ===
    // get the count of active items
    // archive the new item
    // check the length of items is one less
});
