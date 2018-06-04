import { combineReducers } from "redux";
import ChemicalReducer from "./reducer_chemical";
import ConversionReducer from "./reducer_conversion";

const rootReducer = combineReducers({
  chemical: ChemicalReducer,
  conversion: ConversionReducer,
});

export default rootReducer;
