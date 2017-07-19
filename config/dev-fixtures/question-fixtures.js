'use strict';

const questions = [
    {
        text: 'What should be Virginia’s first priority for easing traffic congestion?',
        SurveyId: 1,
        CategoryId: 1
    },
    {
        text: 'How should the state set its policy on marijuana?',
        SurveyId: 1,
        CategoryId: 2
    },
    {
        text: 'What should be Virginia’s first priority for easing traffic congestion?',
        SurveyId: 2,
        CategoryId: 1
    },
    {
        text: 'How should the state set its policy on marijuana?',
        SurveyId: 2,
        CategoryId: 2
    },
    {
        text: 'What do you think about free child care?',
        SurveyId: 3,
        CategoryId: 1
    },
    {
        text: 'What do you think about light rail?',
        SurveyId: 3,
        CategoryId: 2
    },
    {
        text: 'What do you think about the ferry?',
        SurveyId: 3,
        CategoryId: 3
    },
    {
        text: 'What do you think about clouds?',
        SurveyId: 3,
        CategoryId: 1
    }
];

module.exports = {
    load: (app) => {
        return app.orm.Question.count({})
        .then(count => {
            if (count > 0) {
                return [];
            }
            // Create questions.
            return Promise.all(
                questions.map(question => {
                    return app.orm.Question.create(question);
                })
            )
            .then(questions => {

                const maxId = Math.max.apply(Math,questions.map(function(o){return o.id;}));
                app.orm.Question.sequelize.query('select setval(\'question_id_seq\', ' + maxId + ')');

                app.log.info('Questions created');
                return questions;
            });
        });
    }
};
