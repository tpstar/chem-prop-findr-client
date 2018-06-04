import React from 'react';
import SearchChemical from '../SearchChemical';
import renderer from 'react-test-renderer';
import '../../App.css';

describe('SearchChemical', () => {
	it('renders loading correctly', () => {
		const tree = renderer.create(
			<SearchChemical qChemical={""}/>
		).toJSON();
    console.log(tree);
		expect(tree).toMatchSnapshot();
	});
});
