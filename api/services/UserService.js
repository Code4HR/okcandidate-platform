'use strict';

const Service = require('trails-service');
const bcrypt = require('bcrypt');

/**
 * @module UserService
 * @description Service for interacting with User records.
 */
module.exports = class UserService extends Service {

    create (userData) {

        return new Promise((resolve, reject) => {
            bcrypt.hash(userData.password, 10, (err, hash) => {
                if (err) reject(err);
                resolve(hash);
            });
        })
    .then(hash => {
        return this.app.orm.User.create(
        Object.assign({}, userData, {password: hash})
      );
    });

    }

    update (id, userData) {

        return new Promise((resolve, reject) => {
            if (userData.password == '') {
                resolve(null);
            }
            else {
                bcrypt.hash(userData.password, 10, (err, hash) => {
                    if (err) reject(err);
                    resolve(hash);
                });
            }
        })
    .then(hash => {
        if (hash == null) {
            delete userData.password;

            return this.app.orm.User.update(
          Object.assign({}, userData),
          {where: {id: parseInt(id, 10)}}
        );
        }
        else {
            return this.app.orm.User.update(
          Object.assign({}, userData, {password: hash}),
          {where: {id: parseInt(id, 10)}}
        );
        }
    });

    }

    delete(id) {
        return this.app.orm.User.destroy({where: {id: id}});
    }

    getOne(id) {
        return this.app.orm.User.find({
            attributes: ['id', 'name', 'emailAddress'],
            where: {id: id}});
    }

    getAll() {
        return this.app.orm.User.findAll({attributes: ['id', 'name', 'emailAddress']});
    }

};
