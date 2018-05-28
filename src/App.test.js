// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
//
// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
// });

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
