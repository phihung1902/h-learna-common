'use strict';

const phHelloWorld = require('..');
const assert = require('assert').strict;

assert.strictEqual(phHelloWorld(), 'Hello from phHelloWorld');
console.info('phHelloWorld tests passed');
