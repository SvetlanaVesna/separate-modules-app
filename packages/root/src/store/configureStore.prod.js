import {applyMiddleware, createStore} from 'redux';
import thunkMiddleware from'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from "react-router-redux";

import configureReducers from '../reducers/configureReducers';

export const history = createHistory();
const createStoreWithMiddleware = applyMiddleware(thunkMiddleware, routerMiddleware(history))(createStore);

export function configureStore(reducerRegistry) {
  const rootReducer = configureReducers(reducerRegistry.getReducers());
  const store = createStoreWithMiddleware(rootReducer);

  // Reconfigure the store's reducer when the reducer registry is changed - we
  // depend on this for loading reducers via code splitting and for hot
  // reloading reducer modules.
  reducerRegistry.setChangeListener((reducers) => {
    store.replaceReducer(configureReducers(reducers))
  });

  return store
}
