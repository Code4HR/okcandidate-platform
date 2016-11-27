'use strict'

const surveyResultAnswer = [
  { intensity: 3, AnswerId: 1 },
  { intensity: 3, AnswerId: 2 },
  { intensity: 3, AnswerId: 3 }
]

module.exports = {
  load: (app) => {

    return app.orm.SurveyResultAnswer.count({})
    .then(count => {
      if (count > 0) {
        return []
      }
      else {
        // Create Survey Result Answers
        return app.orm.SurveyResult.findAll({where: {}})
        .then(surveyResults => {
          return Promise.all(
            surveyResults.map(surveyResult => {
              return Promise.all(
                surveyResultAnswer.map(surveyResultAnswer => {
                  return app.orm.SurveyResultAnswer.create(
                    Object.assign({}, surveyResultAnswer, {SurveyResultId: surveyResult.id})
                  )
                })
              )
            })
          )
        })
        .then((surveyResultAnswers) => {
          app.log.info('Survey Result Answers created')
          return surveyResultAnswers
        })
      }
    })

  }
}
