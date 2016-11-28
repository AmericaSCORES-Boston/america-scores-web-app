import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import {MyAccountCompiler} from '../MyAccount';

//renders the most basic page without any data. 
it('renders fully without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MyAccountCompiler data={[]} />, div);
});

describe('the MyAccountCompiler', () => {
    it('renders correctly', () => {
        const render = TestUtils.createRenderer()
        render.render(<MyAccountCompiler />)
        var result = render.getRenderOutput();
        expect(result.type).toBe('div');
    });
});

