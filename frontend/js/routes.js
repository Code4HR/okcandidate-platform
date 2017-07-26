import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Frame from './components/Frame';
import Home from './components/environments/Home';
import Admin from './components/environments/Admin';
import SurveySelector from './components/environments/SurveySelector';
import Category from './components/environments/Category';
import Survey from './components/environments/Survey';
import SurveyCreator from './components/environments/SurveyCreator';
import SurveyCreatorGeneral from './components/ecosystems/SurveyCreatorGeneral';
import SurveyCreatorCandidates from './components/ecosystems/SurveyCreatorCandidates';
import SurveyCreatorOffices from './components/ecosystems/SurveyCreatorOffices';
import SurveyCreatorQuestions from './components/ecosystems/SurveyCreatorQuestions';
import SurveyManager from './components/environments/SurveyManager';
import SurveyAnalyzer from './components/environments/SurveyAnalyzer';
import UserManager from './components/environments/UserManager';
import NewUserForm from './components/environments/NewUserForm';
import EditUserForm from './components/environments/EditUserForm';
import DeleteUserForm from './components/environments/DeleteUserForm';
import Results from './components/environments/Results';

module.exports = (
  <Route path="/" component={Frame}>
    <IndexRoute component={Home} />
    <Route path="survey" component={SurveySelector} />
    <Route path="survey/:id" component={Category} />
    <Route path="survey/:id/category" component={Category} />
    <Route path="survey/:id/questions" component={Survey} />
    <Route path="results/:passPhrase" component={Results} />
    <Route path="admin" component={Admin} />
    <Route path="admin/survey" component={SurveyManager} />
    <Route path="admin/survey/new" component={SurveyCreator}>
      <IndexRoute component={SurveyCreatorGeneral} />
    </Route>
    <Route path="admin/survey/:id" component={SurveyCreator}>
      <IndexRoute component={SurveyCreatorGeneral} />
      <Route path="offices" component={SurveyCreatorOffices} />
      <Route path="candidates" component={SurveyCreatorCandidates} />
      <Route path="questions" component={SurveyCreatorQuestions} />
    </Route>
    <Route path="admin/survey/analyze" component={SurveyAnalyzer} />
    <Route path="admin/user" component={UserManager} />
    <Route path="admin/user/new" component={NewUserForm} />
    <Route path="admin/user/edit/:id" component={EditUserForm} />
    <Route path="admin/user/delete/:id" component={DeleteUserForm} />
  </Route>
);
