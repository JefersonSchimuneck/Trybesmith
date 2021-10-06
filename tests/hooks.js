// const mongodb = require('mongodb');
const hooks = require('hooks');
// const { expect } = require('chai');

// let collection = null;

hooks.beforeEach((transaction) => {
  transaction.fullPath = transaction.fullPath.replace(
    '/1',
    `/${hooks.configuration.itemId}`
  );
  transaction.id = transaction.id.replace(
    '/1',
    `/${hooks.configuration.itemId}`
  );

  transaction.request.headers.authorization = hooks.configuration.authToken;
});
