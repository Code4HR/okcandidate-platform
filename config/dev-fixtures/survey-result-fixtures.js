'use strict';

const surveyResults = [
    {
        id: 1,
        publicPassPhrase: 'candidateOneResultOne',
        privatePassPhrase: 'privateCandidateOneResultOne',
        SurveyId: 1,
        CandidateId: 1
    },
    {
        id: 2,
        publicPassPhrase: 'candidateOneResultTwo',
        privatePassPhrase: 'privateCandidateOneResultTwo',
        SurveyId: 2,
        CandidateId: 1
    },
    {
        id: 3,
        publicPassPhrase: 'candidateOneResultThree',
        privatePassPhrase: 'privateCandidateOneResultThree',
        SurveyId: 3,
        CandidateId: 1
    },
    {
        id: 4,
        publicPassPhrase: 'candidateTwoResultOne',
        privatePassPhrase: 'privateCandidateTwoResultOne',
        SurveyId: 1,
        CandidateId: 2
    },
    {
        id: 5,
        publicPassPhrase: 'candidateTwoResultTwo',
        privatePassPhrase: 'privateCandidateTwoResultTwo',
        SurveyId: 2,
        CandidateId: 2
    },
    {
        id: 6,
        publicPassPhrase: 'candidateTwoResultThree',
        privatePassPhrase: 'privateCandidateTwoResultThree',
        SurveyId: 3,
        CandidateId: 2
    },
    {
        id: 7,
        publicPassPhrase: 'candidateThreeResultOne',
        privatePassPhrase: 'privateCandidateThreeResultOne',
        SurveyId: 1,
        CandidateId: 3
    },
    {
        id: 8,
        publicPassPhrase: 'candidateThreeResultTwo',
        privatePassPhrase: 'privateCandidateThreeResultTwo',
        SurveyId: 2,
        CandidateId: 3
    },
    {
        id: 9,
        publicPassPhrase: 'candidateThreeResultThree',
        privatePassPhrase: 'privateCandidateThreeResultThree',
        SurveyId: 3,
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

            const maxId = Math.max.apply(Math,surveyResults.map(o => o.id));
            app.orm.SurveyResult.sequelize.query(`select setval('surveyresult_id_seq', ${maxId})`);

            // Create survey results
            return Promise.all(
                surveyResults.map(surveyResult => {
                    return app.orm.SurveyResult.create(surveyResult);
                })
            )
            .then(newSurveyResults => {

                app.log.info('Survey results created.');
                return newSurveyResults;
            });
        });
    }
};
