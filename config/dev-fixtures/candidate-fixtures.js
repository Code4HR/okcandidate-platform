'use static';

const candidates = [
    {
        id: 1,
        name: 'Candidate A',
        party: 'Republocrat',
        OfficeId: 1,
        picture: '/dist/images/default-user.png'
    },
    {
        id: 2,
        name: 'Candidate B',
        party: 'Democan',
        OfficeId: 1,
        picture: '/dist/images/default-user.png'
    },
    {
        id: 3,
        name: 'Candidate C',
        party: 'Yes, Please',
        OfficeId: 1,
        picture: '/dist/images/default-user.png'
    }
];

module.exports = {
    load: (app) => {
        return app.orm.Candidate.count({})
        .then(count => {
            if (count > 0) {
                return [];
            }

            const maxId = Math.max.apply(Math,candidates.map(o => o.id));
            app.orm.Survey.sequelize.query(`select setval('candidate_id_seq', ${maxId})`);

            // Create candidates
            return Promise.all(
                candidates.map(candidate => {
                    return app.orm.Candidate.create(candidate);
                })
            )
            .then(newCandidates => {
                app.log.info('Candidates created.');
                return newCandidates;
            });
        });
    }
};
