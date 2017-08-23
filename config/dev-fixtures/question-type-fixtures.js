'use static';

const types = [
    {
        id: 1,
        name: 'Multiple choice',
        multipleChoice: true
    },
    {
        id: 2,
        name: 'Multiple choice plus intensity',
        multipleChoice: true,
        sentiment: true
    },
    {
        id: 3,
        name: 'Intensity only',
        sentiment: true
    }
];

module.exports = {
    load: (app) => {
        return app.orm.QuestionType.count({})
        .then(count => {
            if (count > 0) {
                return [];
            }

            const maxId = Math.max.apply(Math,types.map(o => o.id));
            app.orm.Question.sequelize.query(`select setval('questiontype_id_seq', ${maxId})`);

            // Create types.
            return Promise.all(
                types.map(type => {
                    return app.orm.QuestionType.create(type);
                })
            )
            .then(newTypes => {
                app.log.info('Question types created.');
                return newTypes;
            });
        });
    }
};
