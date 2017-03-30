'use strict';
/* global describe, it */

const assert = require('assert');

describe('AuthService', () => {
    it('should exist', () => {
        assert(global.app.api.services['AuthService']);
    });
});
