'use strict';

const assert = require('assert');
const app = require('../../../index');
const supertest = require('supertest');

describe.only('SurveyResultController', () => {
    let request;
    before(() => {
        request = supertest('http://localhost:3000');
    });
    it('should exist', () => {
        assert(app.api.controllers['SurveyResultController']);
    });

    it('generate a public and private passphrase', () => {
        return request.post('/api/v1/surveyresult').expect(200).expect(res => {
            const report = res.body;
            assert(report.publicPassPhrase.split('-').length >= 3 );
            assert(report.privatePassPhrase.split('-').length >= 3 );
        });
    });
});
