'use strict'

const questions = [
  {
    text: 'What do you think about free child care?'
  },
  {
    text: 'What do you think about light rail?'
  },
  {
    text: 'What do you think about the ferry'
  }
]

module.exports = {

  load: (app) => {
    return app.orm.Question.count({})
    .then(count => {
      if (count > 0) {
        return []
      }
      else {
        // For all surveys, create three questions.
        return app.orm.Survey.findAll({where: {}})
        .then(surveys => {
          surveys.map((survey, index) => {
            return Promise.all(
              questions.map(question => {
                return app.orm.Question.create(
                  Object.assign({}, question, {SurveyId: survey.toJSON().id})
                )
              })
            )
          })
        })
        // Create Questions
        .then(questions => {
          app.log.info('Questions created.')
          return questions
        })
      }
    })
  }

}
