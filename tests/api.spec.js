/*!
 * Copyright (c) 2018-2019 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

const chai = require('chai');
const env = require('./env');
chai.should();

if(env.nodejs) {
  global.TextEncoder = require('util').TextEncoder;
}

const {encode, decode} = require('..');
const testString = 'The quick brown fox jumps over the lazy dog.';
const testEncoding =
  'VGhlIHF1aWNrIGJyb3duIGZveCBqdW1wcyBvdmVyIHRoZSBsYXp5IGRvZy4';

describe('base64url-universal APIs', () => {
  describe('encode', () => {
    it('should properly encode data', async () => {
      const result = encode(_strToUint8Array(testString));
      result.should.equal(testEncoding);
    });
  }); // end encode

  describe('decode', () => {
    it('should properly decode data', async () => {
      const result = decode(testEncoding);
      result.should.equal(testString);
    });
  }); // end decode
});

function _strToUint8Array(data) {
  if(typeof data === 'string') {
    // convert data to Uint8Array
    return new TextEncoder().encode(data);
  }
  if(!(data instanceof Uint8Array)) {
    throw new TypeError('"data" be a string or Uint8Array.');
  }
  return data;
}
