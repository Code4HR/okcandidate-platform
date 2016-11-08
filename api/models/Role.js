'use strict'

const Model = require('trails-model')

/**
 * @module Role
 * @description A model describing roles.
 */
module.exports = class Role extends Model {

  static config (app, Sequelize) {
    return {
      options: {
        classMethods: {
          associate: (models) => {
            models.Role.hasMany(models.User, {
              as: 'users'
            })
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
