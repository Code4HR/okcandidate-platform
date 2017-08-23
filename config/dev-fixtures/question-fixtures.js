'use strict';

const questions = [
    {
        id: 1,
        text: 'What should we do about traffic?',
        SurveyId: 1,
        CategoryId: 1
    },
    {
        id: 2,
        text: 'What should we do about parks?',
        SurveyId: 1,
        CategoryId: 2
    },
    {
        id: 3,
        text: 'What should we do about buses',
        SurveyId: 1,
        CategoryId: 3
    },
    {
        id: 4,
        text: 'What should we do about kittens?',
        SurveyId: 1,
        CategoryId: 4
    },
    {
        id: 5,
        text: 'What should we do about traffic?',
        SurveyId: 2,
        CategoryId: 1
    },
    {
        id: 6,
        text: 'What should we do about parks?',
        SurveyId: 2,
        CategoryId: 2
    },
    {
        id: 7,
        text: 'What should we do about buses',
        SurveyId: 2,
        CategoryId: 3
    },
    {
        id: 8,
        text: 'What should we do about kittens?',
        SurveyId: 2,
        CategoryId: 4
    },
    {
        id: 9,
        text: 'How do you feel about traffic?',
        SurveyId: 3,
        CategoryId: 1
    },
    {
        id: 10,
        text: 'How do you feel about parks?',
        SurveyId: 3,
        CategoryId: 2
    },
    {
        id: 11,
        text: 'How do you feel about buses',
        SurveyId: 3,
        CategoryId: 3
    },
    {
        id: 12,
        text: 'How do you feel about kittens?',
        SurveyId: 3,
        CategoryId: 4
    }
];

module.exports = {
    load: (app) => {
        return app.orm.Question.count({})
        .then(count => {
            if (count > 0) {
                return [];
            }

            const maxId = Math.max.apply(Math,questions.map(o => o.id));
            app.orm.Question.sequelize.query(`select setval('question_id_seq', ${maxId})`);

            // Create questions.
            return Promise.all(
                questions.map(question => {
                    return app.orm.Question.create(question);
                })
            )
            .then(newQuestions => {

                app.log.info('Questions created.');
                return newQuestions;
            });
        });
    }
};
