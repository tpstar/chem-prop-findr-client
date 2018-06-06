jest.mock('./components/SearchChemical', () => 'SearchChemical'); //mock nested components
jest.mock('./components/Chemical', () => 'Chemical');

import React from 'react';
import App from './App';

import renderer from 'react-test-renderer';

describe('App', () => {
  it('renders loading correctly', () => {
    const tree = renderer.create(
      <App />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
})
