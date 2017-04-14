'use strict';

const Service = require('trails-service')

module.exports = class QuestionService extends Service {
    getAll() {
        return this.app.orm.Question.findAll();
    }
};
