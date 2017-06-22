"use strict";

const Controller = require("trails-controller");
const Boom = require("boom");
const words = require("./words.json");
const _ = require("lodash");
module.exports = class SurveyResultController extends Controller {
  create(request, reply) {
    let userData = request.payload;
    userData.publicPassPhrase = generatePhrase(3);
    userData.privatePassPhrase = generatePhrase(3);
    this.app.services.SurveyResultService
      .create(userData)
      .then(response => {
        reply(response);
      })
      .catch(error => {
        reply(Boom.badRequest("There was an error creating the Survey."));
      });
  }
};

function generatePhrase(len) {
  return _.times(len, () => words[_.random(0, words.length - 1)]).join("-").toLowerCase();
}
