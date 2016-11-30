import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import {MyAccountManager} from '../MyAccounts.js';

//Not finalized since I am unsure how the exact syntax is. But It gives the general idea of what I want.

const data = {name: "Alice", email: "alice@email.com", phone: 5036672134, password: "******"};

//renders the most basic page without any data. 
it('renders fully without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MyAccountManager data={[]} />, div);
});

describe('My Account Page', () => {
    it('renders correctly', () => {
        const render = TestUtils.createRenderer()
        render.render(<MyAccountManager />)
        var result = render.getRenderOutput();
        expect(result.type).toBe('div');
        expect(result.props.children[0].type).toBe('h1');
    });
});
