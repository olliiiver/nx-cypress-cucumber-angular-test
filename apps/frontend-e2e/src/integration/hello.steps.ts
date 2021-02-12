import { Before, Given, Then, When } from 'cucumber';

Before(() => {
  cy.visit('/');
});

Given('foo', () => {
// Do something
});

Then('bar', () => {
// Do something
});

//