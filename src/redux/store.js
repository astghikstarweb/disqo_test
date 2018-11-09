import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const appReducer = (state, action) => {
   return rootReducer(state, action)
};

const store = createStore(
  appReducer,
  applyMiddleware(thunk)
);

(() => {
  console.log('store changed', store.getState())
});

export default store;