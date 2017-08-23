const users = [
    {
        name: 'A. Voter',
        emailAddress: 'user@gmail.com',
        password: 'leafygreen',
        role: 'voter'
    },
    {
        name: 'A. Candidate',
        emailAddress: 'candidate@gmail.com',
        password: 'mashedpotato',
        role: 'candidate'
    },
    {
        name: 'Anne Admin',
        emailAddress: 'admin@okcandidate.org',
        password: 'adminpass',
        role: 'admin'
    }
];

module.exports = {

    load: (app) => {
        return app.orm.User.count({})
    .then(count => {
        if (count > 0) {
            return [];
        }
        else {
            return Promise.all(
                users.map(user => {
                    return app.services.UserService.create(user);
                })
            )
            .then(newUsers => {
                app.log.info('Users created.');
                return newUsers;
            });
        }
    });

  }

};
