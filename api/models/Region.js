'use strict'

const Model = require('trails-model')

/**
 * @module Region
 * @description Model describing a Region
 */
module.exports = class Region extends Model {

  static config (app, Sequelize) {
    return {
      options: {
        classMethods: {
          associate: (models) => {
            models.Region.belongsToMany(models.Survey, {through: 'surveyregion'})
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
