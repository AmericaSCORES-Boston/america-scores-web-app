import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Components/Login';
import CSVPage from './Components/Download'
import StudentManager from './Components/Student';
import './index.css';
import { Router, Route, browserHistory } from 'react-router';

ReactDOM.render((
        <Router history={browserHistory}>
            <Route path="/" component={Login} />
            <Route path="/csvPage" component={CSVPage} />
            <Route path="/Students" component={StudentManager} />
        </Router>
    ),
  document.getElementById('root')
);
