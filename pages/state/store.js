import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import rootReducer from './slices';
// import {screenTracking, debounceNavActions} from './reduxMiddlewares.js';
import { configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
import authReducer from './slices/auth.reducer';
import {reducer as formReducer }from 'redux-form';
let enhancers = [];

const store = configureStore({
  reducer: {
    authReducer: authReducer,
    form: formReducer
},
enchancers: [thunk, promise]
})

const enhancer = compose(applyMiddleware(thunk, promise), ...enhancers);

// export const store = () => configureStore({rootReducer, {}, enhancer});

const makeStore = () => store;
console.log(store)
const wrapper = createWrapper(makeStore);
module.exports = {
    store,
    wrapper
}