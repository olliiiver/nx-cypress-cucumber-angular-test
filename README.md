# Cypress Cucumber Test

Usage:

``nx run frontend-e2e:e2e``

Error:

Execution currently fails:

````
 1) An uncaught error was detected outside of a test:
     Error: The following error originated from your test code, not from Cypress.

  > Fetching resource at '/__cypress/tests?p=src/support/index.ts' failed

When Cypress detects uncaught errors originating from your test code it will automatically fail the current test.

Cypress could not associate this error to any specific test.

We dynamically generated a new test to display this failure.
      at XMLHttpRequest.xhr.onerror (http://localhost:4200/__cypress/runner/cypress_runner.js:175071:14)
````

See: https://github.com/TheBrainFamily/cypress-cucumber-preprocessor/issues/509
