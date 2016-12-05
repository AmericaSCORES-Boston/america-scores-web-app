import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import CSVLocation from '../CSVPages/Location.js';
import CSVProgram from '../CSVPages/Program.js';
import CSVStudent from '../CSVPages/Student.js';


it('renders fully without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CSVLocation/>, div);
});

it('renders fully without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CSVLProgram/>, div);
});


it('renders fully without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CSVStudent/>, div);
});

describe('CSV Pages', () => {
    it('render correctly', () => {
        const render = TestUtils.createRenderer()
        render.render(<CSVLocation />)
        var result = render.getRenderOutput();
        expect(result.type).toBe('div');
    });
});