// config/bootstrap.js

const roles = require('./dev-fixtures/role-fixtures')
const users = require('./dev-fixtures/user-fixtures')
const surveys = require('./dev-fixtures/survey-fixtures')
const surveyResults = require('./dev-fixtures/survey-result-fixtures')
const offices = require('./dev-fixtures/office-fixtures')
const candidates = require('./dev-fixtures/candidate-fixtures')
const regions = require('./dev-fixtures/region-fixtures')
const questions = require('./dev-fixtures/question-fixtures')
const answers = require('./dev-fixtures/answer-fixtures')

module.exports = (app) => {

  users.load(app)
  .then(roles.load.bind(this, app))
  .then(surveys.load.bind(this, app))
  .then(surveyResults.load.bind(this, app))
  .then(offices.load.bind(this, app))
  .then(candidates.load.bind(this, app))
  .then(regions.load.bind(this, app))
  .then(questions.load.bind(this, app))
  .then(answers.load.bind(this, app))
  .then(() => {
    app.log.info('Fixtures loaded.')
  })

}
