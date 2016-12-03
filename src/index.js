import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Components/Login';
import StudentManager from './Components/Student';
import { Router, Route, browserHistory } from 'react-router';
import ManageAccountsManager from './Components/ManageAccounts';
import CSVLocation from './Components/CSVPages/Location';
import CSVProgram from './Components/CSVPages/Program';
import CSVStudent from './Components/CSVPages/Student';
import RecordResponse from './Components/CSVPages/RecordResponse';
import WipeResponse from './Components/CSVPages/WipeResponse';


ReactDOM.render((
        <Router history={browserHistory}>
            <Route path="/" component={Login} />
            <Route path="/Students" component={StudentManager} />
            <Route path="/ManageAccounts" component={ManageAccountsManager} />
            <Route path="/CSVPage" component={CSVLocation} />
            <Route path="/CSVPage2" component={CSVProgram} />
            <Route path="/CSVPage3" component={CSVStudent} />
            <Route path="/RecordResponse" component={RecordResponse} />
            <Route path="/WipeResponse" component={WipeResponse} />
        </Router>
    ),
  document.getElementById('root')
);
