import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { fetchChemical } from '../index';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares)

const store = mockStore();

describe('fetchChemical', () => {

  beforeEach(() => {
    store.clearActions();
  });
  
  it('should handle FETCH_CHEMICAL_SUCCESS action', async () => {
    const response = '{"id": 1, "name": "Fake Toluene", "fw": "92.14", "formula": "C6H5CH3"}';
    fetch.mockResponseSuccess(response);
    await store.dispatch(fetchChemical('toluene'));
    //store.getActions gives an array of actions
    expect(store.getActions()).toMatchSnapshot()
  })
})
