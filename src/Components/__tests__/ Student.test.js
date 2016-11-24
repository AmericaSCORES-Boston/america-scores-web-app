import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import StudentManager from '../Student.js';


it('renders fully without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StudentManager accounts={[]} />, div);
});

describe('student page', () => {
    it('renders correctly', () => {
        const render = TestUtils.createRenderer()
        render.render(<StudentManager />)
        var result = render.getRenderOutput();
        expect(result.type).toBe('div');
        expect(result.props.className).toBe('studentpage');
        expect(result.props.children[0].props.className).toBe('header');
        expect(result.props.children[0].props.children.type).toBe('h1');
        expect(result.props.children[1].type).toBe('img');
    });
});