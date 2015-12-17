/*!
 * gh-delete | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/gh-delete
*/
'use strict';

const ghGet = require('gh-get');

module.exports = function ghDelete(url, options) {
  return ghGet(url, Object.assign({}, options, {method: 'DELETE'}));
};
