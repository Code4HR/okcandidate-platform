'use static';

const types = [
    {
        name: 'Multiple choice',
        multipleChoice: true
    },
    {
        name: 'Multiple choice plus intensity',
        multipleChoice: true,
        sentiment: true
    },
    {
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
            // Create types.
            return Promise.all(
                types.map(type => {
                    return app.orm.QuestionType.create(type);
                })
            );
        });
    }
};
