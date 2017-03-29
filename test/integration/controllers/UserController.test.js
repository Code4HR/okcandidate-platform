'use strict'
/* global describe, it */

const assert = require('assert')
const app = require('../../../index')

describe('UserController', () => {
  it('should exist', () => {
    assert(app.api.controllers['UserController'])
  })
})
