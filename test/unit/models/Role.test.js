'use strict';
/* global describe, it */

const assert = require('assert');

describe('Role Model', () => {
    it('should exist', () => {
        assert(global.app.api.models['Role']);
    });
});
