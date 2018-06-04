import { FETCH_CHEMICAL } from '../actions';
import { FETCH_CHEMICAL_SUCCESS } from '../actions';

const INITIAL_STATE = {
  loading: false,
  name: " ",
  loaded: false,
}

export default function(state=INITIAL_STATE, action) {
  console.log(state, action.payload)
  switch(action.type) {
    case FETCH_CHEMICAL:
      return {...state, loading: true, loaded: false};
    case FETCH_CHEMICAL_SUCCESS:
      return {...state, ...action.payload, loading: false, loaded: true};
    default:
      return state;
  }
}
