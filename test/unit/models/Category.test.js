'use strict'

const assert = require('assert')
const app = require('../../../index')

describe('Category Model', () => {
  it('should exist', () => {
    assert(app.api.models.Category)
  })
})
