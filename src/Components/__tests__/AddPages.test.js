import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import AddPrograms from '../AddProgram.js';
import AddSites from '../AddSite.js';

var emptyLocationMock = {query:{}};
var locationMock = {query: {site: 0}}; //invalid site
var locationMock1 = {query: {site: 1}}; //valid site

describe('Add Program Page', () => {
    it('renders correctly', () => {
        const render = TestUtils.createRenderer()
        render.render(<AddSites />)
        var result = render.getRenderOutput();
        expect(result.type).toBe('div');
    });
});

describe('Add Program Page', () => {
    it('renders correctly', () => {
        const render = TestUtils.createRenderer()
        render.render(<AddPrograms location={emptyLocationMock}/>)
        var result = render.getRenderOutput();
        expect(result.type).toBe('div');
    });
});


describe('Add Program Page', () => {
    it('renders correctly', () => {
        const render = TestUtils.createRenderer()
        render.render(<AddPrograms location={locationMock} />)
        var result = render.getRenderOutput();
        expect(result.type).toBe('div');
    });
});

describe('Add Program Page', () => {
    it('renders correctly', () => {
        const render = TestUtils.createRenderer()
        render.render(<AddPrograms location={locationMock1} />)
        var result = render.getRenderOutput();
        expect(result.type).toBe('div');
    });
});
