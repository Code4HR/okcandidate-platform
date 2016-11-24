'use strict'
/* global describe, it */

const assert = require('assert')

describe('Answer Model', () => {
  it('should exist', () => {
    assert(global.app.api.models['Answer'])
  })
})
