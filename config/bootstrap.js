// config/bootstrap.js

const roles = require('./dev-fixtures/role-fixtures');
const users = require('./dev-fixtures/user-fixtures');
const surveys = require('./dev-fixtures/survey-fixtures');
const surveyResults = require('./dev-fixtures/survey-result-fixtures');
const surveyResultAnswers = require('./dev-fixtures/survey-result-answer-fixtures');
const offices = require('./dev-fixtures/office-fixtures');
const candidates = require('./dev-fixtures/candidate-fixtures');
const regions = require('./dev-fixtures/region-fixtures');
const categories = require('./dev-fixtures/category-fixtures');
const questions = require('./dev-fixtures/question-fixtures');
const questionTypes = require('./dev-fixtures/question-type-fixtures');
const surveyStatuses = require('./dev-fixtures/survey-status-fixtures');

module.exports = (app) => {

    users.load(app)
    .then(roles.load.bind(this, app))
    .then(questionTypes.load.bind(this, app))
    .then(surveyStatuses.load.bind(this, app))
    .then(surveys.load.bind(this, app))
    .then(offices.load.bind(this, app))
    .then(candidates.load.bind(this, app))
    .then(surveyResults.load.bind(this, app))
    .then(regions.load.bind(this, app))
    .then(categories.load.bind(this, app))
    .then(questions.load.bind(this, app))
    .then(surveyResultAnswers.load.bind(this, app))
    .then(() => {
        app.log.info('Fixtures loaded.');
    });
};
