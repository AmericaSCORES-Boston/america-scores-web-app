import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import {StudentsManager,StudentsTable} from '../Student.js';

var testdata = [
  {name: 'A', dob: '11/11/1111', locations: 'l1, l2, l3'},
  {name: 'B', dob: '11/11/1111', locations: 'l1, l2, l3'},
  {name: 'C', dob: '11/11/1111', locations: 'l1, l2, l3'},
  {name: 'D', dob: '11/11/1111', locations: 'l1, l2, l3'},
  {name: 'E', dob: '11/11/1111', locations: 'l1, l2, l3'}
];

it('renders fully without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StudentsManager accounts={[]} />, div);
});

describe('the StudentsManager', () => {
    it('renders correctly', () => {
        const render = TestUtils.createRenderer()
        render.render(<StudentsManager />)
        var result = render.getRenderOutput();
        expect(result.type).toBe('div');
        expect(result.props.className).toBe('StudentsManager')
        expect(result.props.children[0].props.className).toBe('Students-header')
        expect(result.props.children[0].props.children.type).toBe('h1')
    });
});

describe('the list of Students', () => {
        var studentsManager = <StudentsTable accounts={testdata} />
        studentsManager = TestUtils.renderIntoDocument(studentsManager);
        var rows = TestUtils.scryRenderedDOMComponentsWithClass(studentsManager, 'Students-row')
        var columns = TestUtils.scryRenderedDOMComponentsWithTag(studentsManager, 'th')
    it('has the correct number of rows', () => {
        expect(rows.length).toBe(testdata.length)
    });
    it('has the correct number of columns', () =>{
        expect(columns.length).toBe(2)
    });
});
