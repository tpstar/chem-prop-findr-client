export const FETCH_CHEMICAL_REQUEST = 'FETCH_CHEMICAL_REQUEST';

export const FETCH_CHEMICAL_SUCCESS = 'FETCH_CHEMICAL_SUCCESS';

function fetchChemicalSuccess(data) {
  return {
    type: FETCH_CHEMICAL_SUCCESS,
    payload: data
  }
}

export function fetchChemical(chemical) {
  return (dispatch) => {
    dispatch({ type: FETCH_CHEMICAL_REQUEST });

    const API_URL = process.env.REACT_APP_API_URL;
    // need to return fetch to pass the actions.test, if not return only FETCH_CHEMICAL_REQUEST will be in the snapshot
    return fetch(`${API_URL}/api/chemicals/search/${chemical}`)
      .then(response => response.json())
      .catch(error => console.error('Error', error))
      .then(data => {
        console.log('right before dispatch(fetchChemicalSuccess)')
        dispatch(fetchChemicalSuccess(data))
      });
  }
}

// Async actions with async/await and try/catch

// export const fetchChemical = (chemical) => async (dispatch) => {
//   dispatch({ type: FETCH_CHEMICAL_REQUEST })
//   try {
//     const API_URL = process.env.REACT_APP_API_URL;
//     const response = await fetch(`${API_URL}/api/chemicals/search/${chemical}`);
//     const responseJson = await response.json();
//     dispatch(fetchChemicalSuccess(responseJson))
//   } catch(error) {
//     console.error('Error', error)
//   }
// }
