'use strict';

const assert = require('assert');
const app = require('../../../index');

describe('CategoryController', () => {
    it('should exist', () => {
        assert(app.api.controllers.CategoryController);
    });
});
