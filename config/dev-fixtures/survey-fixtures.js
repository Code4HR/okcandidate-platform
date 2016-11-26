'use strict'

const surveys = [
  {},
  {},
  {}
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
