'use strict';

const surveys = [
    {
        id: 1,
        name: 'Multiple choice survey',
        QuestionTypeId: 1,
        SurveyStatusId: 1
    }
];

module.exports = {

    load: (app) => {
        return app.orm.Survey.count({})
        .then(count => {
            if (count > 0) {
                return [];
            }
            // Create surveys.
            return Promise.all(
              surveys.map(survey => {
                  return app.orm.Survey.create(survey);
              })
            );
        })
        .then(surveys => {

            const maxId = Math.max.apply(Math,surveys.map(function(o){return o.id;}));
            app.orm.Survey.sequelize.query('select setval(\'survey_id_seq\', ' + maxId + ')');

            app.log.info('Surveys created');
            return surveys;
        });
    }

};
