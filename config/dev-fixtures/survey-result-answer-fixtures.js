'use strict';

const surveyResultAnswer = [
    {
        SurveyResultId: 1,
        QuestionId: 1,
        AnswerId: 1
    },
    {
        SurveyResultId: 1,
        QuestionId: 2,
        AnswerId: 4
    },
    {
        SurveyResultId: 1,
        QuestionId: 3,
        AnswerId: 7
    },
    {
        SurveyResultId: 1,
        QuestionId: 4,
        AnswerId: 10
    },
    {
        SurveyResultId: 2,
        QuestionId: 5,
        AnswerId: 13,
        sentiment: 3
    },
    {
        SurveyResultId: 2,
        QuestionId: 6,
        AnswerId: 16,
        sentiment: 5
    },
    {
        SurveyResultId: 2,
        QuestionId: 7,
        AnswerId: 19,
        sentiment: 2
    },
    {
        SurveyResultId: 2,
        QuestionId: 8,
        AnswerId: 22,
        sentiment: 1
    },
    {
        SurveyResultId: 3,
        QuestionId: 9,
        sentiment: 4
    },
    {
        SurveyResultId: 3,
        QuestionId: 10,
        sentiment: 3
    },
    {
        SurveyResultId: 3,
        QuestionId: 11,
        sentiment: 2
    },
    {
        SurveyResultId: 3,
        QuestionId: 12,
        sentiment: 5
    },
    {
        SurveyResultId: 4,
        QuestionId: 1,
        AnswerId: 2
    },
    {
        SurveyResultId: 4,
        QuestionId: 2,
        AnswerId: 5
    },
    {
        SurveyResultId: 4,
        QuestionId: 3,
        AnswerId: 8
    },
    {
        SurveyResultId: 4,
        QuestionId: 4,
        AnswerId: 11
    },
    {
        SurveyResultId: 5,
        QuestionId: 5,
        AnswerId: 14,
        sentiment: 1
    },
    {
        SurveyResultId: 5,
        QuestionId: 6,
        AnswerId: 17,
        sentiment: 4
    },
    {
        SurveyResultId: 5,
        QuestionId: 7,
        AnswerId: 20,
        sentiment: 3
    },
    {
        SurveyResultId: 5,
        QuestionId: 8,
        AnswerId: 23,
        sentiment: 5
    },
    {
        SurveyResultId: 6,
        QuestionId: 9,
        sentiment: 2
    },
    {
        SurveyResultId: 6,
        QuestionId: 10,
        sentiment: 2
    },
    {
        SurveyResultId: 6,
        QuestionId: 11,
        sentiment: 4
    },
    {
        SurveyResultId: 6,
        QuestionId: 12,
        sentiment: 1
    },
    {
        SurveyResultId: 7,
        QuestionId: 1,
        AnswerId: 2
    },
    {
        SurveyResultId: 7,
        QuestionId: 2,
        AnswerId: 6
    },
    {
        SurveyResultId: 7,
        QuestionId: 3,
        AnswerId: 9
    },
    {
        SurveyResultId: 7,
        QuestionId: 4,
        AnswerId: 12
    },
    {
        SurveyResultId: 8,
        QuestionId: 5,
        AnswerId: 15,
        sentiment: 2
    },
    {
        SurveyResultId: 8,
        QuestionId: 6,
        AnswerId: 18,
        sentiment: 1
    },
    {
        SurveyResultId: 8,
        QuestionId: 7,
        AnswerId: 21,
        sentiment: 3
    },
    {
        SurveyResultId: 8,
        QuestionId: 8,
        AnswerId: 24,
        sentiment: 4
    },
    {
        SurveyResultId: 9,
        QuestionId: 9,
        sentiment: 1
    },
    {
        SurveyResultId: 9,
        QuestionId: 10,
        sentiment: 3
    },
    {
        SurveyResultId: 9,
        QuestionId: 11,
        sentiment: 5
    },
    {
        SurveyResultId: 9,
        QuestionId: 12,
        sentiment: 2
    }
];

module.exports = {
    load: (app) => {

        return app.orm.SurveyResultAnswer.count({})
        .then(count => {
            if (count > 0) {
                return [];
            }
            else {
                // Create Survey Result Answers
                return Promise.all(
                  surveyResultAnswer.map(surveyResultAnswer => {
                      return app.orm.SurveyResultAnswer.create(surveyResultAnswer);
                  })
                )
                .then(newSurveyResultAnswers => {
                    app.log.info('Survey result answers created.');
                    return newSurveyResultAnswers;
                });
            }
        });
    }
};
