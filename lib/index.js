/*!
 * Copyright (c) 2018-2019 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

const api = {};
module.exports = api;

// FIXME: the `encode` API for npm base64url allows string or buffer, should
// steps be taken homogenize the APIs in different libs, or consider it a
// feature?
const base64url = require('base64url');

api.encode = base64url.encode;
api.decode = base64url.decode;
