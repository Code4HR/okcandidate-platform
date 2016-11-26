// config/bootstrap.js

const roles = require('./dev-fixtures/role-fixtures')
const users = require('./dev-fixtures/user-fixtures')
const questions = require('./dev-fixtures/question-fixtures')
const answers = require('./dev-fixtures/answer-fixtures')

module.exports = (app) => {

  users.load(app)
  .then(roles.load.bind(this, app))
  .then(questions.load.bind(this, app))
  .then(answers.load.bind(this, app))
  .then(() => {
    app.log.info('Fixtures loaded.')
  })

}
