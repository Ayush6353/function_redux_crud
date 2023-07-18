import { combineReducers } from "redux";
import reducer from "./reducers";

const Rootreducer = combineReducers({
    reducer : reducer,
});

export default Rootreducer;