import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import {MyAccountConstants, MyAccountCompiler, MyAccountsData} from '../MyAccounts.js';

//Not finalized since I am unsure how the exact syntax is. But It gives the general idea of what I want.

var data = {name: "Alice", email: "alice@email.com", phone: 5036672134, password: "******"};

var cons = {title: "Name:", etitle: "Email:", ptitle: "Phone:", pwtitle: "Password:"};

//renders the most basic page without any data. 
it('renders fully without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MyAccountCompiler data={[]} />, div);
});

describe('the MyAccountCompiler', () => {
    it('renders correctly', () => {
        const render = TestUtils.createRenderer()
        render.render(<MyAccountCompiler data={[]}/>)
        var result = render.getRenderOutput();
        expect(result.type).toBe('div');
    });
});
