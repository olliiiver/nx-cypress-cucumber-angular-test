import { Before, Given, Then, When } from 'cucumber';

Before(() => {
  cy.visit('/');
});

Given('foo', () => {

});

Then('I see Hello', () => {
  cy.get('h1').should('contain.text', 'Welcome to demo');
});
