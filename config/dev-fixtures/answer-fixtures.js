const answers = [
  {
    text: 'Not enough!'
  },
  {
    text: 'Just right!'
  },
  {
    text: 'Too much!'
  }
]

module.exports = {

  load: (app) => {
    return app.orm.Answer.count({})
    .then(count => {
      if (count > 0) {
        return []
      }
      else {
        // For all questions, create three answers.
        return app.orm.Question.findAll({where: {}})
        .then(questions => {
          return Promise.all(
            questions.map((question, index) => {
              return Promise.all(
                answers.map((answer, index) => {
                  return app.orm.Answer.create(
                    Object.assign({}, answer, {QuestionId: question.toJSON().id})
                  )
                })
              )
            })
          )
        })
        .then(questions => {
          app.log.info('Answers created.')
          return questions
        })
      }
    })
  }

}
