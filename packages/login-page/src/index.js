import React from 'react';

import reducer from './reducers'
import Auth from './pages/auth';


const namespace = 'auth';
const path = '/auth';

const component =  Auth; //import('./components/auth'); //loadRoute(() => import('./components/auth'));

export {reducer, namespace, component, path};