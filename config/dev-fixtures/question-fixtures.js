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
        return
      }
      else {
        // Create Questions
        return Promise.all(
          questions.map(question => {
            return app.orm.Question.create(question)
          })
        )
        .then(questions => {
          app.log.info('Questions created.')
          return questions
        })
      }
    })
  }

}
