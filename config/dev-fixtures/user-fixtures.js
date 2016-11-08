const users = [
  {
    name: 'A. Voter',
    emailAddress: 'user@gmail.com',
    password: 'leafygreen'
  },
  {
    name: 'A. Candidate',
    emailAddress: 'candidate@gmail.com',
    password: 'mashedpotato'
  },
  {
    name: 'Anne Admin',
    emailAddress: 'admin@okcandidate.org',
    password: 'adminpass'
  }
]

module.exports = {

  load: (app) => {
    return app.orm.User.count({})
    .then(count => {
      if (count > 0) {
        return []
      }
      else {
        return Promise.all(
          users.map(user => {
            return app.services.UserService.create(user)
          })
        )
        .then(users => {
          app.log.info('Users created.')
          return users
        })
      }
    })

  }

}
