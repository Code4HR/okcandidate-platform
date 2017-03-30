'use strict';
/* global describe, it */

const assert = require('assert');

describe('Survey Model', () => {
    it('should exist', () => {
        assert(global.app.api.models['Survey']);
    });
});
