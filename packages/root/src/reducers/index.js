import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
// import { namespaced } from 'redux-subspace'

// import * as calculator from 'nf-fe-calculator';
// import * as login from 'nf-fe-login';


export default combineReducers({
  routerReducer,
  // [login.namespace]: namespaced(login.namespace)(login.reducer),
  // [calculator.namespace]: namespaced(calculator.namespace)(calculator.reducer)
});
