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
    });
});