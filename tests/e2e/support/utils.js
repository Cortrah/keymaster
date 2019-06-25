export const getStore = () => {
    cy.window().its('app.$store');
};

export const getActiveOwnerElements = () => cy.get('#ownerList tbody tr');
