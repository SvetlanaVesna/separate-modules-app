import * as actionTypes from '../constants/authentification/index';

const initialState = {
    isFetching: false,
    isAuthenticated: false,
    errorMessage: ''
};

export default function authReducer(state = initialState, action) {
    const { type } = action;
    switch (type) {
        case actionTypes.AUTH__LOGIN_REQUEST:
            return {
                ...state,
                isFetching: true,
                isAuthenticated: false,
                user: action.creds
            };
        case actionTypes.AUTH__LOGIN_SUCCESS:
            return {
                ...state,
                isFetching: false,
                isAuthenticated: true,
                user: action.user,
                errorMessage: ''
            };
        case actionTypes.AUTH__LOGIN_FAILURE:
            return {
                ...state,
                isFetching: false,
                isAuthenticated: false,
                errorMessage: action.message
            };
        case actionTypes.AUTH__LOGOUT_SUCCESS:
            return {
                ...state,
                isFetching: true,
                isAuthenticated: false
            };
        default:
            return state;
    }
}
