'use strict';
/* global describe, it */

const assert = require('assert');

describe('Region Model', () => {
    it('should exist', () => {
        assert(global.app.api.models['Region']);
    });
});
