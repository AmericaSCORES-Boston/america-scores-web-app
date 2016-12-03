import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Components/Login';
import CSVPage from './Components/Download'
import StudentManager from './Components/Student';
import './index.css';
import { Router, Route, browserHistory } from 'react-router';
import ManageAccountsManager from './Components/ManageAccounts';
import RecordResponse from './Components/RecordResponse';
import Sites from './Components/Sites';


ReactDOM.render((
        <Router history={browserHistory}>
            <Route path="/" component={Login} />
            <Route path="/Sites" component={Sites} />
            <Route path="/CsvPage" component={CSVPage} />
            <Route path="/Students" component={StudentManager} />
            <Route path="/ManageAccounts" component={ManageAccountsManager} />
            <Route path="/RecordResponse" component={RecordResponse} />
        </Router>
    ),
  document.getElementById('root')
);
