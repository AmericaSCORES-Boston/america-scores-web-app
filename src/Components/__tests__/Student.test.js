import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import StudentManager from '../Students.js';

var locationMock = {query: {}}; //no query params
var locationMock2 = {query: {site: 0}}; //invalid site
var locationMock3 = {query: {site: 1}}; //valid site

it('renders fully without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StudentManager location={locationMock} />, div);
});

describe('Student page without query params', () => {
    it('renders correctly', () => {
        const render = TestUtils.createRenderer()
        render.render(<StudentManager location={locationMock}/>)
        var result = render.getRenderOutput();
        expect(result.type).toBe('div');
    });
});


describe('Student page with invalid site', () => {
    it('renders correctly', () => {
        const render = TestUtils.createRenderer()
        render.render(<StudentManager location={locationMock2}/>)
        var result = render.getRenderOutput();
        expect(result.type).toBe('div');
    });
});

describe('Student page with invalid site', () => {
    it('renders correctly', () => {
        const render = TestUtils.createRenderer()
        render.render(<StudentManager location={locationMock3}/>)
        var result = render.getRenderOutput();
        expect(result.type).toBe('div');
    });
});