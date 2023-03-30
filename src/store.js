import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import logger from 'redux-logger';


const foo = (state = 'bar', action)=> {
  return state;
};

const companies = (state = [], action)=> {
  if(action.type === 'SET_COMPANIES'){
    return action.companies
  }
  return state;
};

const widgets = (state = [], action) => {
  if(action.type === 'SET_WIDGETS'){
    return action.widgets
  }
  if(action.type === 'CREATE_WIDGET'){
    return [...state, action.widget]
  }
  if(action.type === 'UPDATE_WIDGET'){
   return state.map(widget => {
      if(widget.id === action.widget.id){
        return action.widget;
      }
      return widget;
    });
  }
  return state;
}


const reducer = combineReducers({
  foo,
  companies,
  widgets
});

export const fetchCompanies = () => {
  return async(dispatch) => {
    const response = await axios.get('https://www.acme-api.com/api/companies')
    dispatch({type: 'SET_COMPANIES', companies: response.data})
  }
}

export const fetchWidgets = () => {
  return async(dispatch) => {
    const response = await axios.get('/api/widgets')
    dispatch({type: 'SET_WIDGETS', widgets: response.data})
  }
}

export const createWidget = (widget) => {
  return async(dispatch) => {
    const response = await axios.post('/api/widgets', widget);
    dispatch({type: "CREATE_WIDGET", widget: response.data})
  }
}

export const editWidget = (widget) => {
  return async(dispatch) => {
    const response = await axios.put(`/api/widgets/${widget.id}`, widget);
    dispatch({type: 'UPDATE_WIDGET', widget: response.data})
  }
}


const store = createStore(reducer, applyMiddleware(logger, thunk));


export default store;
