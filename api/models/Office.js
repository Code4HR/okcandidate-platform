'use strict'

const Model = require('trails-model')

/**
 * @module Office
 * @description Model describing an Office
 */
module.exports = class Office extends Model {

  static config (app, Sequelize) {
    return {
      options: {
        classMethods: {
          associate: (models) => {
            models.Office.belongsToMany(models.Survey, {through: 'surveyoffice'})
            models.Office.hasMany(models.Candidate)
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
