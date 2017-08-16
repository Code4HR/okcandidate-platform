'use static';

const candidates = [
    {
        id: 1,
        name: 'Candidate A',
        party: 'Republocrat',
        OfficeId: 1
    },
    {
        id: 2,
        name: 'Candidate B',
        party: 'Democan',
        OfficeId: 1
    },
    {
        id: 3,
        name: 'Candidate C',
        party: 'Yes, Please',
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

          const maxId = Math.max.apply(Math,candidates.map(function(o){return o.id;}));
          app.orm.Survey.sequelize.query('select setval(\'candidate_id_seq\', ' + maxId + ')');

          // Create candidates
          return Promise.all(
              candidates.map(candidate => {
                  return app.orm.Candidate.create(candidate);
              })
          );
      });
  }
};
