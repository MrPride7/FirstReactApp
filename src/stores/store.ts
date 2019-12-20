import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

import rootReducer from "../reducers";

// @ts-ignore
const composeEnhancers = composeWithDevTools(applyMiddleware(thunk));

const configureStore = (preloadedState: any) => (
  createStore(
    rootReducer,
    preloadedState,
    composeEnhancers
  )
);

const store = configureStore({});

export default store;
