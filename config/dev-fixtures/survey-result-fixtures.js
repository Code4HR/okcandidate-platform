'use strict'

const surveyResults = [
  {
    publicPassPhrase: 'asdfasdfasdf',
    privatePassPhrase: 'asdfasdfasdfasdf'
  },
  {
    publicPassPhrase: 'asdfasdfasdf',
    privatePassPhrase: 'asdfasdfasdfasdf'
  },
  {
    publicPassPhrase: 'asdfasdfasdf',
    privatePassPhrase: 'asdfasdfasdfasdf'
  }
]

module.exports = {
  load: (app) => {
    return app.orm.SurveyResult.count({})
    .then(count => {
      if (count > 0) {
        return []
      }
      else {
        // Create survey results
        app.orm.Survey.findAll({where: {}})
        .then(surveys => {
          return Promise.all(
            surveys.map(survey => {
              return Promise.all(
                surveyResults.map(surveyResult => {
                  return app.orm.SurveyResult.create(
                    Object.assign({}, surveyResult, {SurveyId: survey.toJSON().id})
                  )
                })
              )
            })
          )
        })
      }
    })
  }
}
