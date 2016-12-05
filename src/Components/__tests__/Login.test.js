import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Login from '../Login';
import AuthService from '../../utils/AuthService'

it('renders fully without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Login auth={new AuthService('F8iBVF34KoTqGgOd4fj5D6IRSax8JWxz', 'asbadmin.auth0.com')}/>, div);
});