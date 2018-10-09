import React from 'react';

import { connect } from 'react-redux';
import { compose } from 'recompose';

// import * as select from '../../reducers/selectors';

import RootHomeComponent from './component';

const RootHomeContainer = compose(
    connect(
      () => ({
            isAuthenticated: true
        }),
        dispatch => ({ dispatch })
    )
)(RootHomeComponent);

export default () => <RootHomeContainer />;


