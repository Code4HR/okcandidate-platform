'use strict'

const offices = [
  {
    name: 'Mayor'
  },
  {
    name: 'City Council'
  },
  {
    name: 'School Board'
  }
]

module.exports = {
  load: (app) => {
    return app.orm.Office.count({})
    .then(count => {
      if (count > 0) {
        return []
      }
      else {
        // Create offices.
        return Promise.all(
          offices.map(office => {
            return app.orm.Office.create(office)
          })
        )
        // Add offices to each survey.
        .then(offices => {
          return app.orm.Survey.findAll({where: {}})
          .then(surveys => {
            return Promise.all(
              surveys.map(survey => {
                return Promise.all(
                  offices.map(office => {
                    return survey.addOffice(office)
                  })
                )
              })
            )
          })
        })
        // Whew!
        .then(offices => {
          app.log.info('Offices created.')
          return offices
        })
      }
    })
  }
}
