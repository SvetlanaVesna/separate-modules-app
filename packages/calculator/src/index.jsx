import React from 'react';
import Loadable from "react-loadable";

import duck from './ducks/calculator';
import {Loading} from './components/loading';

const namespace = 'calculator';
const path = '/calculator';

function loadRoute (getPromise) {
  const RouteComponent = Loadable({
    loader: () => getPromise(),
    loading: Loading,
    render(loaded, props) {
      const Component = loaded.default;
      return(<Component {...props} />) ;
    }
  });
  return (routeProps) => <RouteComponent {...routeProps} />
}
const component = loadRoute(() => import('./components/home'));

export {duck, namespace, component, path};