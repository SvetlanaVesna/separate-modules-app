import React from 'react';

import { connect } from 'react-redux';
import { compose } from 'recompose';

// import * as select from '../../reducers/selectors';

import AuthComponent from './component';

const AuthContainer = compose(
    connect(
      () => ({
            isAuthenticated: true
        }),
        dispatch => ({ dispatch })
    )
)(AuthComponent);

export default () => <AuthContainer />;


