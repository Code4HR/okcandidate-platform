'use strict';

const Model = require('trails-model')

/**
 * @module Category
 * @description Model describing a survey category
 */
module.exports = class Category extends Model {

  static config (app, Sequelize) {

  }

  static schema (app, Sequelize) {
    return {
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      icon: {
        type: Sequelize.STRING
      }
    }
  }
}
