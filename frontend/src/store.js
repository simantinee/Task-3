import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {};

const middleWare = [thunk];

const store = createStore(rootReducer, 
    initialState, 
    compose(composeWithDevTools(applyMiddleware(...middleWare))
));

export default store;