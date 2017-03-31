'use strict';

const Model = require('trails-model');

/**
 * @module Question
 * @description Model describing a question
 */
module.exports = class Question extends Model {

  static config (app, Sequelize) {

  }

  static schema (app, Sequelize) {
    return {
      text: {
        type: Sequelize.STRING,
        allowNull: false
      }
    }
  }
>>>>>>> update models

};
