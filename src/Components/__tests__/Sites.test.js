import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Sites from '../Sites';

var testdata = [
      {name: 'Location1'},
      {name: 'Location2'},
      {name: 'Location3'},
      {name: 'Location4'},
      {name: 'Location5'}
];

it('renders fully without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Sites/>, div);
});

describe('Sites', () => {
    it('renders correctly', () => {
        const render = TestUtils.createRenderer()
        render.render(<Sites />)
        var result = render.getRenderOutput();
        expect(result.type).toBe('div');
    });
});