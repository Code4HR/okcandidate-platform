'use strict';

const Service = require('trails-service');

/**
 * @module CategoryService
 * @description TODO Category Service
 */
module.exports = class CategoryService extends Service {

    getAll() {
        return this.app.orm.Category.findAll();
    }

};
