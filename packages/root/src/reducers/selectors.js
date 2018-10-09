import jwt_decode from 'jwt-decode';

/**
 * Login
 * @param authReducer
 * @returns {boolean}
 */
export const currentUserState = ({ authReducer }) =>
    authReducer.isAuthenticated;

export const getCurrentUser = () =>
    localStorage.getItem('id_token') !== null &&
    localStorage.getItem('id_token') !== undefined
        ? jwt_decode(localStorage.getItem('id_token'))
        : { authorities: [] };
