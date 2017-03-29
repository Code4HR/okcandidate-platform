import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Frame from './components/Frame';
import Home from './components/environments/Home';
import Admin from './components/environments/Admin';
import Survey from './components/environments/Survey';
import SurveyCreator from './components/environments/SurveyCreator';
import SurveyManager from './components/environments/SurveyManager';
import SurveyAnalyzer from './components/environments/SurveyAnalyzer';
import UserManager from './components/environments/UserManager';

import Results from './components/environments/Results';

module.exports = (
  <Route path="/" component={Frame}>
    <IndexRoute component={Home} />
    <Route path="survey" component={Survey} />
    <Route path="results" component={Results} />
    <Route path="admin" component={Admin} />
    <Route path="admin" component={Admin} />
    <Route path="admin/survey" component={SurveyManager} />
    <Route path="admin/survey/new" component={SurveyCreator} />
    <Route path="admin/survey/analyze" component={SurveyAnalyzer} />
    <Route path="admin/user" component={UserManager} />
  </Route>
);
