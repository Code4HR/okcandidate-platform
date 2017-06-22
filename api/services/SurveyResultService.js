"use strict";

const Service = require("trails-service");

module.exports = class SurveyResultService extends Service {
  create(userData) {
    return this.app.orm.SurveyResult.create(userData)
  }
};
