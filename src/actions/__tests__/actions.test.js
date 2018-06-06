import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
// import fetchMock from 'fetch-mock'
import * as actions from '../index'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

const store = mockStore({ chemical: {} })

describe('fetchChemical', () => {
  it('should handle FETCH_CHEMICAL_SUCCESS action', async () => {
    const response = '{"chemical": {"id": 1, "name": "Toluene"}}';
    fetch.mockResponseSuccess(response);
    await store.dispatch(actions.fetchChemical('toluene'));

    expect(store.getActions()).toMatchSnapshot()
  })
})


// const mockResult = {
//   payload: {id: 1, name: "Toluene"}
// }
//
// describe('fetchChemical', () => {
//   afterEach(() => {
//     fetchMock.reset()
//     fetchMock.restore()
//   })
//
//   it('should create FETCH_CHEMICAL_SUCCESS when searching', () => {
//     fetchMock.getOnce(('/api/chemicals/search/toluene'), mockResult)
//     const expectedActions = [
//       { type: actions.FETCH_CHEMICAL },
//       { type: actions.FETCH_CHEMICAL_SUCCESS, payload: mockResult }
//     ]
//
//     const store = mockStore({ chemical: {} })
//
//     return store.dispatch(actions.fetchChemical('toluene'))
//       .then(() => {
//       //return of async expectedActions
//         expect(store.getActions()).toEqual(expectedActions);
//       })
//     })
// })
