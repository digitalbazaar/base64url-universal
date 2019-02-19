/*!
 * Copyright (c) 2018-2019 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

const env = require('./env');

const api = {};
module.exports = api;

let base64url;
if(env.nodejs) {
  // FIXME: the `encode` API for npm base64url allows string or buffer, should
  // steps be taken homogenize the APIs in different libs, or consider it a
  // feature?
  base64url = require('base64url');
} else {
  base64url = require('./base64url');
}
api.encode = base64url.encode;
api.decode = base64url.decode;
