'use static';

const statuses = [
    {
        name: 'In progress'
    },
    {
        name: 'Sent to candidates'
    },
    {
        name: 'Published'
    }
];

module.exports = {
    load: (app) => {
        return app.orm.SurveyStatus.count({})
        .then(count => {
            if (count > 0) {
                return [];
            }
            // Create statuses.
            return Promise.all(
                statuses.map(status => {
                    return app.orm.SurveyStatus.create(status);
                })
            );
        });
    }
};
