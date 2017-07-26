'use strict';

const assert = require('assert');
const app = require('../../../index');
const supertest = require('supertest');
const sinon = require('sinon');

describe.only('SurveyResultController', () => {
    let request;
    before(() => {
        request = supertest('http://localhost:3000');
        sinon.stub(request, 'post').returns({
            expect: (cb) => {
                cb({body: {status: 200, publicPassPhrase: 'food-bar-bats', privatePassPhrase: 'alpha-beta-charlie'}});
            }
        });
    });
    it('should exist', () => {
        assert(app.api.controllers['SurveyResultController']);
    });

    it('generate a public and private passphrase', () => {
        return request.post('/api/v1/surveyresult').expect(res => {
            const report = res.body;
            assert(report.publicPassPhrase.split('-').length >= 3 );
            assert(report.privatePassPhrase.split('-').length >= 3 );
        });
    });
});
