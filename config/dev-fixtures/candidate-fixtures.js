'use static';

const candidates = [
    {
        id: 1,
        name: 'Candidate A',
        party: 'Republocrat',
        url: 'http://www.google.com',
        infoUrl: 'http://www.google.com',
        picture: '/dist/images/candidates/candidate-a.jpg',
        OfficeId: 1
    },
    {
        id: 2,
        name: 'Candidate B',
        party: 'Democan',
        url: 'http://www.yahoo.com',
        infoUrl: 'http://www.yahoo.com',
        picture: '/dist/images/candidates/candidate-b.jpg',
        OfficeId: 1
    },
    {
        id: 3,
        name: 'Candidate C',
        party: 'Yes, Please',
        url: 'http://www.dogpile.com',
        infoUrl: 'http://www.dogpile.com',
        picture: '/dist/images/candidates/candidate-c.jpg',
        OfficeId: 1
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
