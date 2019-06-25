// https://docs.cypress.io/api/introduction/api.html

describe('End to end configuration', () => {

    it('visits the root and makes an assertion', () => {
        cy.visit('/');
        cy.contains('Owners');
    });
});
