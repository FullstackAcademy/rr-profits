import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import logger from 'redux-logger';


const foo = (state = 'bar', action)=> {
  return state;
};
const reducer = combineReducers({
  foo
});

const store = createStore(reducer, applyMiddleware(logger, thunk));


export default store;
