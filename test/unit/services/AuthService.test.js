'use strict';
/* global describe, it */

const assert = require('assert')
const app = require('../../../index')

describe('AuthService', () => {
  it('should exist', () => {
    assert(app.api.services['AuthService'])
  })
})
