import React from 'react';

import { connect } from 'react-redux';
import { compose } from 'recompose';

// import * as select from '../../reducers/selectors';

import HomeComponent from './component';

const HomeContainer = compose(
    connect(
      () => ({
            isAuthenticated: true
        }),
        dispatch => ({ dispatch })
    )
)(HomeComponent);

export default () => <HomeContainer />;


