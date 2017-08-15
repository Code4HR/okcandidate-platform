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

    create (surveyData) {
        return this.app.orm.SurveyResult.create(
        Object.assign({}, surveyData)
      );
    }

    match(params) {
        return this.app.orm.SurveyResult.find({
            where: params
        })
        .then((result) => {
            const query = `select surveyresult.id as "SurveyResultId"
                , questiontype."multipleChoice"
                , questiontype.sentiment
                , surveyresultanswer."QuestionId"
                , surveyresultanswer."AnswerId"
                , surveyresultanswer.sentiment as "SurveyResultSentiment"
                , candidate."CandidateId"
                , candidate."Name"
                , candidate."Office"
                , candidate."AnswerId" as "CandidateAnswerId"
                , candidate.sentiment as "CandidateSentiment"
                from surveyresult
                inner join survey 
		          on survey.id = surveyresult."SurveyId"
		        inner join questiontype
		          on questiontype.id = survey."QuestionTypeId"
                inner join surveyresultanswer
                  on surveyresultanswer."SurveyResultId" = surveyresult.id
                left outer join (select t0.id as "CandidateId"
                                  , t0.name as "Name"
                                  , t1.name as "Office"
                                  , t3."QuestionId"
                                  , t3."AnswerId"
                                  , t3.sentiment
                                  from candidate t0
                                  inner join office t1
                                    on t1.id = t0."OfficeId"
                                  inner join surveyresult t2
                                    on t2."CandidateId" = t0.id
                                  inner join surveyresultanswer t3
                                    on t3."SurveyResultId" = t2.id) candidate
                  on candidate."QuestionId" = surveyresultanswer."QuestionId"
                where surveyresult.id = ?`;

            return this.app.orm.SurveyResultAnswer.sequelize.query(query, {
                replacements: [result.id],
                type: this.app.orm.SurveyResultAnswer.sequelize.QueryTypes.SELECT
            });
        })
        .then((answers) => {
            const matches = answers.reduce((a, v) => {
                if (v.Name != null) {

                    // If survey is multiple choice answers must match to score a point.
                    // If survey uses sentiment use it for score, otherwise score is always 1.
                    // If candidate sentiment is null then divide sentiment by 5 otherwise 10.
                    const score = v.multipleChoice ? (
                        v.AnswerId == v.CandidateAnswerId ? (
                            v.sentiment ? (
                                v.CandidateSentiment > 0 ?
                                    (v.CandidateSentiment + v.SurveyResultSentiment) / 10 :
                                    v.SurveyResultSentiment / 5
                            ) : 1
                        ) : 0
                    ) : (v.CandidateSentiment != null ?
                            (v.CandidateSentiment + v.SurveyResultSentiment) / 10 :
                            v.SurveyResultSentiment / 5);

                    const candidate = {
                        name: v.Name,
                        office: v.Office,
                        score: score,
                        numQuestions: 1
                    };

                    const existing = a.findIndex(e =>
                        (e.name == candidate.name && e.office == candidate.office));

                    if (existing >= 0) {
                        a[existing].score += candidate.score;
                        a[existing].numQuestions += candidate.numQuestions;
                        return a;
                    }

                    return [candidate, ...a];
                }

                return a;
            }, []);

            return matches.map(m => {
                m.matchRate = (m.score / m.numQuestions) * 100;
                return m;
            });
        });
    }
};
