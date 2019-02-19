/*!
 * Copyright (c) 2018-2019 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

const chai = require('chai').use(require('chai-bytes'));
const env = require('./env');
const should = chai.should();

if(env.nodejs) {
  global.TextEncoder = require('util').TextEncoder;
}

const {encode, decode} = require('..');
const testString = 'The quick brown fox jumps over the lazy dog.';
const testEncoding =
  'VGhlIHF1aWNrIGJyb3duIGZveCBqdW1wcyBvdmVyIHRoZSBsYXp5IGRvZy4';

describe('base64url-universal APIs', () => {
  describe('encode', () => {
    it('should properly encode a Uint8Array', async () => {
      const result = encode(_strToUint8Array(testString));
      result.should.equal(testEncoding);
    });
    it('should properly encode a string', async () => {
      const result = encode(testString);
      result.should.equal(testEncoding);
    });
    it('throws TypeError on invalid input', async () => {
      let result;
      let error;
      try {
        // attempt to provide a number as a parameter
        result = encode(1235232);
      } catch(e) {
        error = e;
      }
      should.not.exist(result);
      should.exist(error);
      (error instanceof TypeError).should.be.true;
    });
  }); // end encode

  describe('decode', () => {
    it('should properly decode data', async () => {
      const result = decode(testEncoding);
      result.should.equalBytes(_strToUint8Array(testString));
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
