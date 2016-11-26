'use strict'

const surveys = [
  {
    name: 'Survey 1'
  },
  {
    name: 'Survey 2'
  },
  {
    name: 'Survey 3'
  }
]

module.exports = {

  load: (app) => {
    return app.orm.Survey.count({})
    .then(count => {
      if (count > 0) {
        return []
      }
      else {
        // Create surveys.
        return Promise.all(
          surveys.map(survey => {
            return app.orm.Survey.create(survey)
          })
        )
      }
    })
    .then(surveys => {
      app.log.info('Surveys created')
      return surveys
    })
  }

}
