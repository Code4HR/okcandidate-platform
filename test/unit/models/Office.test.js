'use strict'
/* global describe, it */

const assert = require('assert')

describe('Office Model', () => {
  it('should exist', () => {
    assert(global.app.api.models['Office'])
  })
})
