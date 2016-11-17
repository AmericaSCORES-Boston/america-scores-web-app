import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils'
import {MyAccountConstants, MyAccountCompiler, MyAccountsData} from '../MyAccounts.js';

//Not finalized since I am unsure how the exact syntax is. But It gives the general idea of what I want.

var testA = {name: "Alice", email: "alice@email.com", phone: 503-667-2134, password: "******"};

var testB = {name: "Katniss", email: "katniss@email.com", phone: "877-332-4543", password: "******"};

//renders the most basic page without any data. 
it('renders fully without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MyAccountCompiler data={[]} />, div);
});

//This tests the MyAccountConstants class
describe('the MyAccountConstents', () =>
	it('renders correctly', () =>
		const render = ReactTestUtils.createRenderer();
		render.render(<MyAccountConstents />)
		var results = render.getRenderOutput();
		expect(results.type).toBe('div'));
		expect(results.props.className).toBe('constents');
		expect(results.props.children[0].type).toBe('h1');
	);
);

//This tests the MyAccountsData class
describe('the MyAccountsData', () =>
	var myaccdataA = <MyAccountData data={testA} />
	myaccdataA = ReactTestsUtils.renderIntoDocument(myaccdataA);
	it('has correct number of items', () =>
		expect(testA.length).toBe(4);
	);
	it('renders the correct information', () =>
		expect(myaccdataA.props.children[1]).toBe("Alice");
		expect(myaccdataA.props.children[2]).toBe("alice@email.com");
	);
);
