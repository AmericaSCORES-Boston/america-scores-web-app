import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Components/Login';
import StudentManager from './Components/Student';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';
import ManageAccountsManager from './Components/ManageAccounts';
import AuthService from './utils/AuthService'
import CSVLocation from './Components/CSVPages/Location';
import CSVProgram from './Components/CSVPages/Program';
import CSVStudent from './Components/CSVPages/Student';
import RecordResponse from './Components/CSVPages/RecordResponse';
import WipeResponse from './Components/CSVPages/WipeResponse';
import Sites from './Components/Sites';
import Container from './Components/Container';

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
                <Route path="Students" component={StudentManager} onEnter={requireAuth} />
                <Route path="ManageAccounts" component={ManageAccountsManager} onEnter={requireAuth} />
                <Route path="RecordResponse" component={RecordResponse} onEnter={requireAuth} />
                <Route path="/CSVPage" component={CSVLocation} onEnter={requireAuth}/>
                <Route path="/CSVPage2" component={CSVProgram} onEnter={requireAuth}/>
                <Route path="/CSVPage3" component={CSVStudent} onEnter={requireAuth}/>
                <Route path="/WipeResponse" component={WipeResponse} onEnter={requireAuth}/>
            </Route>
        </Router>
    ),
  document.getElementById('root')
);