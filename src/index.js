import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Components/Login';
import CSVPage from './Components/Download'
import StudentManager from './Components/Student';
import './index.css';
import { Router, Route, browserHistory } from 'react-router';
import ManageAccountsManager from './Components/ManageAccounts';
import AuthService from './utils/AuthService'
import RecordResponse from './Components/RecordResponse';
import Sites from './Components/Sites';

const auth = new AuthService('F8iBVF34KoTqGgOd4fj5D6IRSax8JWxz', 'asbadmin.auth0.com');

// validate authentication for private routes
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' })
  }
}

ReactDOM.render((
        <Router history={browserHistory}>
            <Route path="/" component={Login} auth={auth} />
            <Route path="/Sites" component={Sites} />
            <Route path="/CsvPage" component={CSVPage} />
            <Route path="/Students" component={StudentManager} />
            <Route path="/ManageAccounts" component={ManageAccountsManager} />
            <Route path="/RecordResponse" component={RecordResponse} />
        </Router>
    ),
  document.getElementById('root')
);