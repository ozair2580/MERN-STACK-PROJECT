import counter from "./Reducer";
import lebabu from "./Secondreduce"
import pina from './Thirdreducer'
import { combineReducers } from "redux"

const rootReducer=combineReducers({
    counter:counter,
    lebabu:lebabu,
   pina:pina,
    
});
export default rootReducer;