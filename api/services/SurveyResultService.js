'use strict';

const Service = require('trails-service');

/**
 * @module ResultService
 * @description candidate match results
 */
module.exports = class SurveyResultService extends Service {
    get() {
        return this.app.orm.SurveyResult.findAll();
    }

    match(params) {
        return this.app.orm.SurveyResult.find({
            where: params
        })
        .then((result) => {
            const query = 'select surveyresult.id as "SurveyResultId"' +
                ', surveyresultanswer."QuestionId"' +
                ', surveyresultanswer.intensity as "SurveyResultIntensity"' +
                ', candidate."CandidateId"' +
                ', candidate."Name"' +
                ', candidate."Office"' +
                ', candidate.intensity as "CandidateItensity" ' +
                'from surveyresult ' +
                'inner join surveyresultanswer ' +
                  'on surveyresultanswer."SurveyResultId" = surveyresult.id ' +
                'left outer join (select t0.id as "CandidateId"' +
                                  ', t0.name as "Name"' +
                                  ', t1.name as "Office"' +
                                  ', t3."QuestionId"' +
                                  ', t3.intensity ' +
                                  'from candidate t0 ' +
                                  'inner join office t1 ' +
                                    'on t1.id = t0."OfficeId" ' +
                                  'inner join surveyresult t2 ' +
                                    'on t2."CandidateId" = t0.id ' +
                                  'inner join surveyresultanswer t3 ' +
                                    'on t3."SurveyResultId" = t2.id) candidate ' +
                  'on candidate."QuestionId" = surveyresultanswer."QuestionId" ' +
                'where surveyresult.id = ?';

            return this.app.orm.SurveyResultAnswer.sequelize.query(query, {
                replacements: [result.id],
                type: this.app.orm.SurveyResultAnswer.sequelize.QueryTypes.SELECT
            });
        })
        .then((answers) => {
            return answers.map((answer) => {
                return Object.assign(answer, {
                    score: (answer.SurveyResultIntensity + answer.CandidateItensity) / 10
                });
            });
        });
    }
};
