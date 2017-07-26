'use static';

const types = [
    {
        name: 'Multiple choice'
    },
    {
        name: 'Multiple choice plus intensity'
    },
    {
        name: 'Intensity only'
    }
];

module.exports = {
    load: (app) => {
        return app.orm.QuestionType.count({})
        .then(count => {
            if (count > 0) {
                return [];
            }
            // Create types.
            return Promise.all(
                types.map(type => {
                    return app.orm.QuestionType.create(type);
                })
            );
        });
    }
};
