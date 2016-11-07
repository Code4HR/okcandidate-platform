'use strict'
/* global describe, it */

const assert = require('assert')

describe('UserService', () => {
  it('should exist', () => {
    assert(global.app.api.services['UserService'])
  })
})
