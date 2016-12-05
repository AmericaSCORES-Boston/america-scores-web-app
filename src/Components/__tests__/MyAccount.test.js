import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import AuthService  from '../../utils/AuthService';
import MyAccountCompiler from '../MyAccount';
import Api from '../../api';
import { PropTypes as T } from 'react';
import Auth0Lock from 'auth0-lock';

it('renders fully without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MyAccountCompiler auth={new AuthService('F8iBVF34KoTqGgOd4fj5D6IRSax8JWxz', 'asbadmin.auth0.com')}/>, div);
});

// it('renders fully without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<MyAccountCompiler auth={ new AuthService('F8iBVF34KoTqGgOd4fj5D6IRSax8JWxz', 'asbadmin.auth0.com') } />, div);
// });

// describe('My Account page', () => {
//     it('renders correctly', () => {
//         const render = TestUtils.createRenderer()
//         render.render(<MyAccountCompiler />)
//         var result = render.getRenderOutput();
//         expect(result.type).toBe('div');
//     });
// });
