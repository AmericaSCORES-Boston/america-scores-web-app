import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import CSVLocation from '../CSVPages/Location.js';
import CSVProgram from '../CSVPages/Program.js';
import CSVStudent from '../CSVPages/Student.js';



describe('CSV Pages', () => {
    it('render correctly', () => {
        const render = TestUtils.createRenderer()
        render.render(<CSVLocation />)
        var result = render.getRenderOutput();
        expect(result.type).toBe('div');
    });
});