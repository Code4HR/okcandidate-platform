'use strict';
/* global describe, it */

const assert = require('assert');
const app = require('../../../index');

describe('UserService', () => {
    it('should exist', () => {
        assert(app.api.services['UserService']);
    });
});
