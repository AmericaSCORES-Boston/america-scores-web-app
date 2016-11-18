import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Components/Login';
import ManageAccountsManager from './Components/ManageAccounts';
import CSVPage from './Components/Download'
import './index.css';
import { Router, Route, browserHistory } from 'react-router';

ReactDOM.render((
        <Router history={browserHistory}>
            <Route path="/" component={Login} />
            <Route path="/manageAccounts" component={ManageAccountsManager} />
            <Route path="/csvPage" component={CSVPage} />
        </Router>
    ),
  document.getElementById('root')
);
