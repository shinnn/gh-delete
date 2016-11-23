'use strict';

const ghDelete = require('.');
const test = require('tape');

process.env.GITHUB_TOKEN = '';

test('ghDelete()', t => {
  t.plan(2);

  t.equal(ghDelete.name, 'ghDelete', 'should have a function name.');

  ghDelete('lipsum', {
    headers: {
      'user-agent': 'Shinnosuke Watanabe https://github.com/shinnn'
    },
    verbose: true,
    token: process.env.TOKEN_FOR_TEST
  }).then(t.fail, err => {
    t.strictEqual(err.response.request.method, 'DELETE', 'should create a DELETE request.');
  }).catch(t.fail);
});
