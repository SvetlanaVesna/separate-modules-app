import { createStore } from 'redux-dynamic-reducer'
import { applyMiddleware } from 'redux-subspace'
import thunk from 'redux-thunk'
import wormhole from 'redux-subspace-wormhole'
import rootReducer from '../reducers/index'

const configureStore = preloadedState => createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(
    thunk,
    wormhole((state) => state.routerReducer, 'routerReducer')
  )
);

export default configureStore
