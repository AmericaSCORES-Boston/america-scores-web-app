import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import {ManageAccountsManager,ManageAccountsTable} from '../ManageAccounts.js';

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
    it('renders correctly', () => {
        const render = TestUtils.createRenderer()
        render.render(<ManageAccountsManager />)
        var result = render.getRenderOutput();
        expect(result.type).toBe('div');
        expect(result.props.className).toBe('ManageAccountsManager')
        expect(result.props.children[0].props.className).toBe('Account-header')
        expect(result.props.children[0].props.children.type).toBe('h1')
    });
});

describe('the list of Accounts', () => {
        var manageAccountManager = <ManageAccountsTable accounts={testdata} />
        manageAccountManager = TestUtils.renderIntoDocument(manageAccountManager);
        var rows = TestUtils.scryRenderedDOMComponentsWithClass(manageAccountManager, 'account-row')
        var columns = TestUtils.scryRenderedDOMComponentsWithTag(manageAccountManager, 'th')
    it('has the correct number of rows', () => {
        expect(rows.length).toBe(testdata.length)
    });
    it('has the correct number of columns', () =>{
        expect(columns.length).toBe(3)
    });
});
