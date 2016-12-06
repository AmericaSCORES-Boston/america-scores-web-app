import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import CSVLocation from '../CSVPages/Location.js';
import CSVProgram from '../CSVPages/Program.js';
import CSVStudent from '../CSVPages/Student.js';



describe('CSV Location', () => {
    it('render correctly', () => {
        const render = TestUtils.createRenderer()
        render.render(<CSVLocation />)
        var result = render.getRenderOutput();
        expect(result.type).toBe('div');
    });
});

var programLocationPropMock = {query: {}};
var programLocationPropMock2 = {query: {location: 1}};
describe('CSV Program without query params', () => {
    it('render correctly', () => {
        const render = TestUtils.createRenderer()
        render.render(<CSVProgram location={programLocationPropMock}/>)
        var result = render.getRenderOutput();
        expect(result.type).toBe('div');
    });
});

describe('CSV Program with query params', () => {
    it('render correctly', () => {
        const render = TestUtils.createRenderer()
        render.render(<CSVProgram location={programLocationPropMock2}/>)
        var result = render.getRenderOutput();
        expect(result.type).toBe('div');
    });
});

var studentLocationPropMock = {query: {}};
var studentLocationPropMock2 = {query: {site: 1}};

describe('CSV Student without query params', () => {
    it('render correctly', () => {
        const render = TestUtils.createRenderer()
        render.render(<CSVStudent location={studentLocationPropMock}/>)
        var result = render.getRenderOutput();
        expect(result.type).toBe('div');
    });
});

describe('CSV Student with query params', () => {
    it('render correctly', () => {
        const render = TestUtils.createRenderer()
        render.render(<CSVStudent location={studentLocationPropMock2}/>)
        var result = render.getRenderOutput();
        expect(result.type).toBe('div');
    });
});