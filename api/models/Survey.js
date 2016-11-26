'use strict'

const Model = require('trails-model')

/**
 * @module Survey
 * @description Model describing a Survey
 */
module.exports = class Survey extends Model {

  static config (app, Sequelize) {
    return {
      options: {
        classMethods: {
          associate: (models) => {
            models.Survey.hasMany(models.Question)
          }
        }
      }
    }
  }

  static schema (app, Sequelize) {
    return {
      name: {
        type: Sequelize.STRING,
        allowNull: false
      }
    }

  }

}
