'use static'

const candidates = [
  {
    name: 'Candidate A'
  },
  {
    name: 'Candidate B'
  },
  {
    name: 'Candidate C'
  }
]

module.exports = {
  load: (app) => {
    return app.orm.Candidate.count({})
    .then(count => {
      if (count > 0) {
        return []
      }
      else {
        // For all offices, add one candidate.
        return app.orm.Office.findAll({where: {}})
        .then(offices => {
          return Promise.all(
            offices.map((office, index) => {
              return app.orm.Candidate.create(
                Object.assign({}, candidates[index], {OfficeId: office.id})
              )
            })
          )
        })
        .then(candidates => {
          app.log.info('Created candidates')
          return candidates
        })
      }
    })
  }
}
