import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import {AccountsManager,AccountsTable} from '../Accounts';

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
  ReactDOM.render(<AccountsManager accounts={[]} />, div);
});

describe('the AccountsManager', () => {
    it('renders correctly', () => {
        const render = TestUtils.createRenderer()
        render.render(<AccountsManager />)
        var result = render.getRenderOutput();
        expect(result.type).toBe('div');
        expect(result.props.className).toBe('AccountsManager')
    });
});

describe('the list of Accounts', () => {
        var coachManager = <AccountsTable accounts={testdata} />
        coachManager = TestUtils.renderIntoDocument(coachManager);
        var rows = TestUtils.scryRenderedDOMComponentsWithClass(coachManager, 'coach-row')
        var columns = TestUtils.scryRenderedDOMComponentsWithTag(coachManager, 'th')
    it('has the correct number of rows', () => {
        expect(rows.length).toBe(testdata.length)
    });
    it('has the correct number of columns', () =>{
        expect(columns.length).toBe(3)
    });
});