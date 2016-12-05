import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Programs from '../Programs';

var locationMock = {query: {}}; //no query params
var locationMock2 = {query: {site: 0}}; //invalid site
var locationMock3 = {query: {site: 1}}; //valid site

it('renders fully without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Programs location={locationMock}/>, div);
});

describe('Sites', () => {
    it('renders correctly', () => {
        const render = TestUtils.createRenderer()
        render.render(<Programs location={locationMock} />)
        var result = render.getRenderOutput();
        expect(result.type).toBe('div');
    });
});

describe('Sites', () => {
    it('renders correctly', () => {
        const render = TestUtils.createRenderer()
        render.render(<Programs location={locationMock2} />)
        var result = render.getRenderOutput();
        expect(result.type).toBe('div');
    });
});

describe('Sites', () => {
    it('renders correctly', () => {
        const render = TestUtils.createRenderer()
        render.render(<Programs location={locationMock3} />)
        var result = render.getRenderOutput();
        expect(result.type).toBe('div');
    });
});