// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-file-upload';

import "cypress-mailosaur";

const Mailosaur = require('mailosaur');

Cypress.Commands.add('assertEmailHtmlContent', (serverId, criteria, expectedHtmlContent) => {
  const mailosaurClient = new Mailosaur(process.env.MAILOSAUR_API_KEY);

  return mailosaurClient.messages.search(serverId, criteria)
    .then((messages) => {
      if (messages.items.length === 0) {
        throw new Error(`No emails found matching the criteria: ${JSON.stringify(criteria)}`);
      }

      const lastMessageId = messages.items[messages.items.length - 1].id;

      return mailosaurClient.messages.getById(lastMessageId)
        .then((message) => {
          const actualHtmlContent = message.html.body;
          expect(actualHtmlContent).to.equal(expectedHtmlContent);
        });
    });
});
