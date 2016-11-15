import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import ManageAccountsManager from './Components/ManageAccounts';
import './index.css';
import { Router, Route, browserHistory } from 'react-router';

ReactDOM.render((
        <Router history={browserHistory}>
            <Route path="/" component={App} />
            <Route path="/manageAccounts" component={ManageAccountsManager} />
        </Router>
    ),
  document.getElementById('root')
);
