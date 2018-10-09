import React from 'react'
import { Route, Switch } from 'react-router-dom';
import * as calculator from 'nf_fe_calculator';
import * as login from 'nf-fe-login';

import RootHome from '../components/rootHome/'

function configureRoutes(reducerRegistry) {
  return (
    <Switch>
      <Route path="/home" component={RootHome}/>
      <Route path={calculator.path} component={() => {
        // Webpack code splitting incantation - anything required in the callback
        // will be placed in a new chunk.
         require.ensure([], require => {
          // Register the reducer depended upon by the screen component
          reducerRegistry.register({ [calculator.namespace]: calculator.duck });
          // Configure hot module replacement for the reducer
          if (process.env.NODE_ENV !== 'production') {
            if (module.hot) {
              module.hot.accept('../../node_modules/nf_fe_calculator/src/ducks/calculator', () => {
                reducerRegistry.register({[calculator.namespace]: calculator.duck})
              })
            }
          }
        });
        return calculator.component()
      }}/>
    </Switch>
  )
}

export default configureRoutes;