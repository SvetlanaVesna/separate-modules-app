import { push } from 'react-router-redux';
import * as authConstants from '../../constants/authentification/index';

const requestLogin = creds => ({
    type: authConstants.AUTH__LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds
});

const receiveLogin = user => ({
    type: authConstants.AUTH__LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    id_token: user.id_token
});

const loginError = message => ({
    type: authConstants.AUTH__LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
});

const loginUser = creds => {
    const AUTH_STUB = true;

    if (AUTH_STUB) {
        return dispatch => {
            const user = {
                id_token: 'token'
            };
            dispatch(receiveLogin(user));
            dispatch(push('/main'));
        };
    }

    const auth = btoa('login:pass');
    const headers = {
        Authorization: `Basic ${auth}`,
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': '*'
    };

    const config = {
        method: 'POST',
        headers,
        body: `grant_type=login_password&login=${creds.username}&password=${
            creds.password
            }&client_id=login&scope=scope`
    };

    return dispatch => {
        dispatch(requestLogin(creds));

        return fetch(authConstants.AUTH__AUTH_URL, config)
            .then(response => response.json().then(user => ({ user, response })))
            .then(({ user, response }) => {
                if (response.ok) {
                    localStorage.setItem('id_token', user.access_token);
                    dispatch(receiveLogin(user));

                    dispatch(push('/main'));
                    return Promise.resolve(user);
                }
                dispatch(loginError(user.message));
                return Promise.reject(user);
            })
            .catch(e => dispatch(loginError(e.toString())));
    };
};

const requestLogout = () => ({
    type: authConstants.AUTH__LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true
});

const receiveLogout = () => ({
    type: authConstants.AUTH__LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false
});

const logoutUser = () => dispatch => {
    dispatch(requestLogout());
    localStorage.removeItem('id_token');
    localStorage.removeItem('access_token');
    dispatch(receiveLogout());
};

export default { loginUser, logoutUser };