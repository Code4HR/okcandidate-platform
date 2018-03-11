'use strict';

const surveyResultAnswer = [
    {
        sentiment: 3,
        SurveyResultId: 1,
        QuestionId: 1
    },
    {
        sentiment: 3,
        SurveyResultId: 1,
        QuestionId: 2
    },
    {
        sentiment: 3,
        SurveyResultId: 1,
        QuestionId: 3
    },
    {
        sentiment: 4,
        SurveyResultId: 1,
        QuestionId: 4
    },
    {
        sentiment: 3,
        SurveyResultId: 2,
        QuestionId: 1
    },
    {
        sentiment: 3,
        SurveyResultId: 2,
        QuestionId: 2
    },
    {
        sentiment: 3,
        SurveyResultId: 2,
        QuestionId: 3
    },
    {
        sentiment: 3,
        SurveyResultId: 3,
        QuestionId: 1
    },
    {
        sentiment: 3,
        SurveyResultId: 3,
        QuestionId: 2
    },
    {
        sentiment: 3,
        SurveyResultId: 3,
        QuestionId: 3
    },
    {
        sentiment: 3,
        SurveyResultId: 4,
        QuestionId: 1
    },
    {
        sentiment: 3,
        SurveyResultId: 4,
        QuestionId: 2
    },
    {
        sentiment: 3,
        SurveyResultId: 4,
        QuestionId: 3
    },
    {
        sentiment: 3,
        SurveyResultId: 5,
        QuestionId: 1
    },
    {
        sentiment: 3,
        SurveyResultId: 5,
        QuestionId: 2
    },
    {
        sentiment: 3,
        SurveyResultId: 5,
        QuestionId: 3
    },
    {
        sentiment: 3,
        SurveyResultId: 6,
        QuestionId: 1
    },
    {
        sentiment: 3,
        SurveyResultId: 6,
        QuestionId: 2
    },
    {
        sentiment: 3,
        SurveyResultId: 6,
        QuestionId: 3
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
                .then((surveyResultAnswers) => {
                    app.log.info('Survey Result Answers created');
                    return surveyResultAnswers;
                });
            }
        });
    }
};
