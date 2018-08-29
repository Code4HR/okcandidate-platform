'use strict';

// This file doesn't go through babel or webpack transformation.
// Make sure the syntax and sources this file requires are compatible with the current node version you are running
// See https://github.com/zeit/next.js/issues/1245 for discussions on Universal Webpack or universal Babel

const express = require('express');
const exp = express();
const { parse } = require('url');
const next = require('next');
const request = require('request');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {

  exp.get('/survey/:id/:page', (req, res) => {
    const {page} = req.params;
    return app.render(req, res, `/${page}`, req.params);
  });

  exp.get('/results/:passPhrase', (req, res) => {
    const {passPhrase} = req.params;
    const url = `http://api:8080/api/v1/surveymatch/${passPhrase}`;
    return request(url, (error, response, body) => {
      if (error) {
        return app.render(req, res, '/results', req.params);
      }
      return app.render(req, res, '/results', Object.assign({}, req.params, {result: body}));
    });
  });

  exp.get('/*', (req, res) => {
    return handle(req, res, parse(req.url, true));
  });

  exp.listen(3000);
})
