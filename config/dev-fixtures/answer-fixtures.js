'use strict';

const answers = [
    {
        text: 'Maintain user fees (gas tax) to build new roads',
        QuestionId: 1
    },
    {
        text: 'Leverage public-private partnerships to protect taxpayers',
        QuestionId: 1
    },
    {
        text: 'Provide incentives for carpooling and transit',
        QuestionId: 1
    },
    {
        text: 'Make marijuana legal for medical purposes',
        QuestionId: 2
    },
    {
        text: 'Maintain current laws that criminalize all marijuana use',
        QuestionId: 2
    },
    {
        text: 'Legalize recreational use and tax sales',
        QuestionId: 2
    },
    {
        text: 'Maintain user fees (gas tax) to build new roads',
        QuestionId: 3
    },
    {
        text: 'Leverage public-private partnerships to protect taxpayers',
        QuestionId: 3
    },
    {
        text: 'Provide incentives for carpooling and transit',
        QuestionId: 3
    },
    {
        text: 'Make marijuana legal for medical purposes',
        QuestionId: 4
    },
    {
        text: 'Maintain current laws that criminalize all marijuana use',
        QuestionId: 4
    },
    {
        text: 'Legalize recreational use and tax sales',
        QuestionId: 4
    }
];

module.exports = {
    load: (app) => {
        return app.orm.Answer.count({})
        .then(count => {
            if (count > 0) {
                return [];
            }
            // Create answers.
            return Promise.all(
                answers.map(answer => {
                    return app.orm.Answer.create(answer);
                })
            );
        });
    }
};
