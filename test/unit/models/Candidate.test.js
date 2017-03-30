'use strict';
/* global describe, it */

const assert = require('assert');

describe('Candidate Model', () => {
    it('should exist', () => {
        assert(global.app.api.models['Candidate']);
    });
});
