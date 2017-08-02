'use strict';

const Controller = require('trails-controller');
const Boom = require('boom');

/**
 * @module SurveyResultCategoryController
 * @description TODO document Controller.
 */
module.exports = class SurveyResultCategoryController extends Controller {

    postAll(request, reply) {
        const SurveyResultCategories = request.payload.SurveyResultCategories;

        Promise.all(SurveyResultCategories.map(src => {
            return this.app.orm.SurveyResultCategory.create({
                SurveyResultId: src.SurveyResultId,
                CategoryId: src.CategoryId,
                rank: src.rank
            });
        }))
            .then(records => {
                reply(records);
            })
            .catch(error => {
                reply(Boom.badRequest(error));
            });
    }

    updateAll(request, reply) {
        const SurveyResultCategories = request.payload.SurveyResultCategories;

        Promise.all(SurveyResultCategories.map(src => {
            return this.app.orm.SurveyResultCategory.update(
                {rank: src.rank},
                {where: {id: src.id}}
            );
        }))
            .then(records => {
                reply(records);
            })
            .catch(error => {
                reply(Boom.badRequest(error));
            });
    }
};
