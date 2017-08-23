'use strict';

const answers = [
    {
        id: 1,
        text: 'Study it',
        QuestionId: 1
    },
    {
        id: 2,
        text: 'Abolish it',
        QuestionId: 1
    },
    {
        id: 3,
        text: 'Give the city more money to fix it',
        QuestionId: 1
    },
    {
        id: 4,
        text: 'Study it',
        QuestionId: 2
    },
    {
        id: 5,
        text: 'Abolish it',
        QuestionId: 2
    },
    {
        id: 6,
        text: 'Give the city more money to fix it',
        QuestionId: 2
    },
    {
        id: 7,
        text: 'Study it',
        QuestionId: 3
    },
    {
        id: 8,
        text: 'Abolish it',
        QuestionId: 3
    },
    {
        id: 9,
        text: 'Give the city more money to fix it',
        QuestionId: 3
    },
    {
        id: 10,
        text: 'Study it',
        QuestionId: 4
    },
    {
        id: 11,
        text: 'Abolish it',
        QuestionId: 4
    },
    {
        id: 12,
        text: 'Give the city more money to fix it',
        QuestionId: 4
    },
    {
        id: 13,
        text: 'Study it',
        QuestionId: 5
    },
    {
        id: 14,
        text: 'Abolish it',
        QuestionId: 5
    },
    {
        id: 15,
        text: 'Give the city more money to fix it',
        QuestionId: 5
    },
    {
        id: 16,
        text: 'Study it',
        QuestionId: 6
    },
    {
        id: 17,
        text: 'Abolish it',
        QuestionId: 6
    },
    {
        id: 18,
        text: 'Give the city more money to fix it',
        QuestionId: 6
    },
    {
        id: 19,
        text: 'Study it',
        QuestionId: 7
    },
    {
        id: 20,
        text: 'Abolish it',
        QuestionId: 7
    },
    {
        id: 21,
        text: 'Give the city more money to fix it',
        QuestionId: 7
    },
    {
        id: 22,
        text: 'Study it',
        QuestionId: 8
    },
    {
        id: 23,
        text: 'Abolish it',
        QuestionId: 8
    },
    {
        id: 24,
        text: 'Give the city more money to fix it',
        QuestionId: 8
    }
];

module.exports = {
    load: (app) => {
        return app.orm.Answer.count({})
        .then(count => {
            if (count > 0) {
                return [];
            }

            const maxId = Math.max.apply(Math,answers.map(o => o.id));
            app.orm.Question.sequelize.query(`select setval('answer_id_seq', ${maxId} )`);

            // Create answers.
            return Promise.all(
                answers.map(answer => {
                    return app.orm.Answer.create(answer);
                })
            )
            .then(newAnswers => {
                app.log.info('Answers created.');
                return newAnswers;
            });
        });
    }
};
