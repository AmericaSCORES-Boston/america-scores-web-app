import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import ManageAccountsManager from '../ManageAccounts';

var testdata = [
  {name: 'Guy 1', type: 'Coach', permissions: 'Program 1, Program 2'},
  {name: 'Guy 2', type: 'Volunteer', permissions: 'Program 3'},
  {name: 'Guy 3', type: 'Coach', permissions: 'Locaiton 4'},
  {name: 'Girl 1', type: 'Volunteer', permissions: 'Program 2'},
  {name: 'Girl 2', type: 'Coach', permissions: 'Program 4'},
  {name: 'Girl 3', type: 'Coach', permissions: 'Program 5'},
];


it('renders fully without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ManageAccountsManager accounts={[]} />, div);
});

describe('the ManageAccountsManager', () => {
    const ls = require("../../utils/localstorage");
    ls.setLocalStorage();
    it('renders correctly', () => {
        const render = TestUtils.createRenderer()
        render.render(<ManageAccountsManager />)
        var result = render.getRenderOutput();
        expect(result.type).toBe('div');
    });
});