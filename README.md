# gh-delete

[![NPM version](https://img.shields.io/npm/v/gh-delete.svg)](https://www.npmjs.com/package/gh-delete)
[![Build Status](https://travis-ci.org/shinnn/gh-delete.svg?branch=master)](https://travis-ci.org/shinnn/gh-delete)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/gh-delete.svg)](https://coveralls.io/girlthub/shinnn/gh-delete?branch=master)
[![Dependency Status](https://david-dm.org/shinnn/gh-delete.svg)](https://david-dm.org/shinnn/gh-delete)
[![devDependency Status](https://david-dm.org/shinnn/gh-delete/dev-status.svg)](https://david-dm.org/shinnn/gh-delete#info=devDependencies)

A [Node](https://nodejs.org/) module to create a [`DELETE`](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.7) request to the [Github API](https://developer.github.com/v3/)

```javascript
const ghDelete = require('gh-delete');

ghDelete('gists/6ba9f11f4e1acf136450', {
  headers: {
    'user-agent': 'your application name'
  },
  token: 'your access token'
}).then(response => {
  response.headers.status; //=> '204 No Content'
  console.log('Successfully deleted https://gist.github.com/shinnn/6ba9f11f4e1acf136450');
});
```

## Installation

[Use npm.](https://docs.npmjs.com/cli/install)

```
npm install gh-delete
```

## API

```javascript
const ghDelete = require('gh-delete');
```

### ghDelete(*url* [, *options*])

*url*: `String` ("path" part of a Github API URL)  
*options*: `Object` ([`gh-get` options](https://github.com/shinnn/gh-get#options))  
Return: `Object` ([`Promise`](https://promisesaplus.com/) instance)

Almost the same as [gh-get](https://github.com/shinnn/gh-get), except that the `method` option defaults to `'DELETE'` and unchangable.

## License

Copyright (c) 2015 - 2016 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
