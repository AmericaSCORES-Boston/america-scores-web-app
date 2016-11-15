import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import ManageAccountsManager from './Components/ManageAccounts';
import CSVPage from './Components/Download'
import './index.css';
import { Router, Route, browserHistory } from 'react-router';

ReactDOM.render((
        <Router history={browserHistory}>
            <Route path="/" component={App} />
            <Route path="/manageAccounts" component={ManageAccountsManager} />
            <Route path="/csvPage" component={CSVPage} />
        </Router>
    ),
  document.getElementById('root')
);
