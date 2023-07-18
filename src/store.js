import { createStore } from "redux";
import Rootreducer from "./reducers/rootreducers";
import { composeWithDevTools } from "redux-devtools-extension";



const Store = createStore(Rootreducer, composeWithDevTools());

export default Store;