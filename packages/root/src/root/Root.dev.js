import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import  {ConnectedRouter}  from 'react-router-redux';

import {history, configureStore} from '../store/configureStore'

import configureRoutes from './routes';

import coreReducers from '../reducers';
import ReducerRegistry from '../reducers/ReducerRegistry';


const reducerRegistry = new ReducerRegistry(coreReducers);


const routes = configureRoutes(reducerRegistry);
const store = configureStore(reducerRegistry);


export const Root = () => (
  <Provider store={store} >
    <div>
      <ConnectedRouter history={history}>
        {routes}
      </ConnectedRouter>
    </div>
  </Provider>
);
if (process.env.NODE_ENV !== 'production') {
  if (module.hot) {
    module.hot.accept('../reducers/configureReducers', () => {
      const nextCoreReducers = require('../reducers/configureReducers');
      reducerRegistry.register(nextCoreReducers)
    })
  }
}
Root.propTypes = {
  store: PropTypes.object
};