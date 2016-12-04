import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Components/Login';
import CSVPage from './Components/Download'
import StudentManager from './Components/Student';
import './index.css';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';
import ManageAccountsManager from './Components/ManageAccounts';
import AuthService from './utils/AuthService'
import RecordResponse from './Components/RecordResponse';
import Sites from './Components/Sites';
import Container from './Components/Container'

const auth = new AuthService('F8iBVF34KoTqGgOd4fj5D6IRSax8JWxz', 'asbadmin.auth0.com');
// validate authentication for private routes
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/Login' })
  }
}

ReactDOM.render((
        <Router history={browserHistory}>
        <Route path="/" component={Container} auth={auth}>
            <IndexRedirect to="Login" />
            <Route path="Login" component={Login} />
            <Route path="Sites" component={Sites} onEnter={requireAuth} />
            <Route path="CsvPage" component={CSVPage} onEnter={requireAuth} />
            <Route path="Students" component={StudentManager} onEnter={requireAuth} />
            <Route path="ManageAccounts" component={ManageAccountsManager} onEnter={requireAuth} />
            <Route path="RecordResponse" component={RecordResponse} onEnter={requireAuth} />
        </Route>
        </Router>
    ),
  document.getElementById('root')
);