import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import StudentManager from './Components/Student';
import './index.css';
import { Router, Route, browserHistory } from 'react-router';
import ManageAccountsManager from './Components/ManageAccounts';


ReactDOM.render((
        <Router history={browserHistory}>
            <Route path="/" component={App} />
            <Route path="/Students" component={StudentManager} />
            <Route path="/ManageAccounts" component={ManageAccountsManager} />
        </Router>
    ),
  document.getElementById('root')
);
