export const FETCH_CHEMICAL = 'FETCH_CHEMICAL';

export const FETCH_CHEMICAL_SUCCESS = 'FETCH_CHEMICAL_SUCCESS';

function fetchChemicalSuccess(data) {
  return {
    type: FETCH_CHEMICAL_SUCCESS,
    payload: data
  }
}

export function fetchChemical(chemical) {
  return (dispatch) => {
    dispatch({ type: FETCH_CHEMICAL });

    const API_URL = process.env.REACT_APP_API_URL;
    fetch(`${API_URL}/api/chemicals/search/${chemical}`)
      .then(response => response.json())
      .catch(error => console.error('Error', error))
      .then(data => {
        dispatch(fetchChemicalSuccess(data))
      });
  }


  // return {
  //   type: FETCH_CHEMICAL,
  //   payload: request
  // }
}
