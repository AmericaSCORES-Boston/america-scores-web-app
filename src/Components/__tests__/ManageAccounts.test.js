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
    it('renders correctly', () => {
        const render = TestUtils.createRenderer()
        render.render(<ManageAccountsManager />)
        var result = render.getRenderOutput();
        expect(result.type).toBe('div');
    });
});
describe('the ManageAccountsManager', () => {
    it('correctly handles valid changes to program', () => {
        const render = TestUtils.createRenderer()
        render.render(<ManageAccountsManager />)
        const div = document.createElement('div');
        var tree = TestUtils.renderIntoDocument(<ManageAccountsManager />);
        let row = TestUtils.findRenderedDOMComponentWithClass(tree, 'Girl 1')
        let cell = row.cells[2]
        TestUtils.Simulate.click(cell)
        let input = TestUtils.findRenderedDOMComponentWithTag(tree, 'input')
        expect(input.value).toBe('Program 2')
        input.value= "correctValue"
        TestUtils.Simulate.change(input);
        TestUtils.Simulate.blur(input);
        row = TestUtils.findRenderedDOMComponentWithClass(tree, 'Girl 1')
        cell = row.cells[2]
    })
    it('correctly handles invalid changes to program', () => {
        const render = TestUtils.createRenderer()
        render.render(<ManageAccountsManager />)
        const div = document.createElement('div');
        var tree = TestUtils.renderIntoDocument(<ManageAccountsManager />);
        let row = TestUtils.findRenderedDOMComponentWithClass(tree, 'Girl 1')
        let cell = row.cells[2]
        TestUtils.Simulate.click(cell)
        let input = TestUtils.findRenderedDOMComponentWithTag(tree, 'input')
        expect(input.value).toBe('Program 2')
        input.value= "incorrectValue"
        TestUtils.Simulate.change(input);
        TestUtils.Simulate.keyDown(input, {key: "Enter", keyCode: 13, which: 13});
        expect(cell.innerHTML).toBe('Program 2')
      });
});