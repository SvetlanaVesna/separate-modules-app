import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';
// Import core third-party reducers here, e.g.:
// var {reducer: formReducer} = require('redux-form')

function configureReducers(reducers) {
  return combineReducers({
    ...reducers,
    routerReducer
    // Combine core third-party reducers here, e.g.:
    // form: formReducer
  })
};

export default configureReducers;