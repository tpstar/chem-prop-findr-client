import { FETCH_CHEMICAL_REQUEST } from '../actions';
import { FETCH_CHEMICAL_SUCCESS } from '../actions';

const INITIAL_STATE = {
  loading: false,
  name: " "
}

export default function(state=INITIAL_STATE, action) {
  console.log(state, action.payload)
  switch(action.type) {
    case FETCH_CHEMICAL_REQUEST:
      return {...state, loading: true};
    case FETCH_CHEMICAL_SUCCESS:
      return {...state, ...action.payload, loading: false};
    default:
      return state;
  }
}
