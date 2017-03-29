'use strict'
/* global describe, it */

const assert = require('assert')
const app = require('../../../index')

describe('AuthController', () => {
  it('should exist', () => {
    assert(app.api.controllers['AuthController'])
  })
})
