'use strict';

const surveyResults = [
    {
        id: 1,
        publicPassPhrase: 'publicPhraseOne',
        privatePassPhrase: 'privatePhraseOne',
        phone: '123456789',
        email: 'testUser@survey.com',
        SurveyId: 1
    },
    {
        id: 2,
        publicPassPhrase: 'publicPhraseTwo',
        privatePassPhrase: 'privatePhraseTwo',
        phone: '198765432',
        email: 'NotherUser@survey.com',
        SurveyId: 1
    },
    {
        id: 3,
        publicPassPhrase: 'publicPhraseThree',
        privatePassPhrase: 'privatePhraseThree',
        phone: '18675309',
        email: 'ThirdUser@survey.com',
        SurveyId: 1
    },
    {
        id: 4,
        publicPassPhrase: 'publicPhraseFour',
        privatePassPhrase: 'privatePhraseFour',
        SurveyId: 1,
        CandidateId: 1
    },
    {
        id: 5,
        publicPassPhrase: 'publicPhraseFive',
        privatePassPhrase: 'privatePhraseFive',
        SurveyId: 1,
        CandidateId: 2
    },
    {
        id: 6,
        publicPassPhrase: 'publicPhraseSix',
        privatePassPhrase: 'privatePhraseSix',
        SurveyId: 1,
        CandidateId: 3
    }
];

module.exports = {
    load: (app) => {
        return app.orm.SurveyResult.count({})
        .then(count => {
            if (count > 0) {
                return [];
            }

            const maxId = Math.max.apply(Math,surveyResults.map(function(o){return o.id;}));
            app.orm.SurveyResult.sequelize.query('select setval(\'surveyresult_id_seq\', ' + maxId + ')');

            // Create survey results
            return Promise.all(
                surveyResults.map(surveyResult => {
                    return app.orm.SurveyResult.create(surveyResult);
                })
            )
            .then(surveyResults => {

                app.log.info('Survey results created');
                return surveyResults;
            });
        });
    }
};
