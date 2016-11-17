import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import page from './Components/Student';
import './index.css';
import { Router, Route, browserHistory } from 'react-router';

ReactDOM.render((
        <Router history={browserHistory}>
            <Route path="/" component={App} />
            <Route path="/Students" component={page} />
        </Router>
    ),
  document.getElementById('root')
);
