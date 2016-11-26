'use strict'

const regions = [
  {
    name: 'Region 1'
  },
  {
    name: 'Region 2'
  },
  {
    name: 'Region 3'
  }
]

module.exports = {
  load: (app) => {
    return app.orm.Region.count({})
    .then(count => {
      if (count > 0) {
        return []
      }
      else {
        // Create regions
        return Promise.all(
          regions.map(region => {
            return app.orm.Region.create(region)
          })
        )
        // Add regions to each survey
        .then(regions => {
          return app.orm.Survey.findAll({where: {}})
          .then(surveys => {
            return Promise.all(
              surveys.map(survey => {
                return Promise.all(
                  regions.map(region => {
                    return survey.addRegion(region)
                  })
                )
              })
            )
          })
        })
        .then(() => {
          return Promise.all([
            app.orm.Office.findAll({where: {}}),
            app.orm.Region.findAll({where: {}})
          ])
          .then(([offices, regions]) => {

            debugger

            return Promise.all(
              offices.map(office => {
                return Promise.all(
                  regions.map(region => {
                    return office.addRegion(region)
                  })
                )
              })
            )
          })
        })
        // Whew!
        .then(regions => {
          app.log.info('Regions created.')
          return regions
        })
      }
    })
  }
}
