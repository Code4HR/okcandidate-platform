'use strict';
/* global describe, it */

const assert = require('assert')
const app = require('../../../index')

describe('Auth', () => {
  it('should exist', () => {
    assert(app.api.policies['Auth'])
  })
})
