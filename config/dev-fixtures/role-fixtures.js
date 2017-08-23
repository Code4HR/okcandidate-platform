const roles = [
    {
        name: 'voter'
    },
    {
        name: 'candidate'
    },
    {
        name: 'admin'
    }
];

function addUserToRole(app, user, role) {
    return Promise.all([
        app.orm.User.find({where: {name: user}}),
        app.orm.Role.find({where: {name: role}})
    ])
    .then(output => {
        const user = output[0];
        const role = output[1];
        return role.setUsers([user]);
    });
}

module.exports = {

    load: (app) => {
        return app.orm.Role.count({})
        .then(count => {
            if (count > 0) {
                return;
            }
            else {
                // Create roles.
                return Promise.all(
                    roles.map(role => {
                        return app.orm.Role.create(role);
                    })
                )
                // Assign existing users to roles
                .then(roles => {
                    return Promise.all([
                        addUserToRole(app, 'A. Voter', 'voter'),
                        addUserToRole(app, 'A. Candidate', 'candidate'),
                        addUserToRole(app, 'Anne Admin', 'admin')
                    ]);
                })
                .then(newRoles => {
                    app.log.info('Roles created.');
                    return newRoles;
                });
            }
        });
    }
};
