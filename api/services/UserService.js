'use strict'

const Service = require('trails-service')
const bcrypt = require('bcrypt')

/**
 * @module UserService
 * @description Service for interacting with User records.
 */
module.exports = class UserService extends Service {

  create (userData) {

    return new Promise((resolve, reject) => {
      bcrypt.hash(userData.password, 10, (err, hash) => {
        if (err) reject(err)
        resolve(hash)
      })
    })
    .then(hash => {
      return this.app.orm.User.create(
        Object.assign({}, userData, {password: hash})
      )
    })

  }

}
