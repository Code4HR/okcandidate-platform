// config/bootstrap.js

const roles = require('./dev-fixtures/role-fixtures')
const users = require('./dev-fixtures/user-fixtures')

module.exports = (app) => {

  users.load(app)
  .then(roles.load.bind(this, app))
  .then(() => {
    app.log.info('Fixtures loaded.')
  })

}
