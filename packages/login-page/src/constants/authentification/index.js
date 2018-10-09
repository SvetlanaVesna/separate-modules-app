import { APP_URL } from "../endpoints/index";

export const AUTH__LOGIN_REQUEST = 'AUTH__LOGIN_REQUEST';
export const AUTH__LOGIN_SUCCESS = 'AUTH__LOGIN_SUCCESS';
export const AUTH__LOGIN_FAILURE = 'AUTH__LOGIN_FAILURE';
export const AUTH__LOGOUT_REQUEST = 'AUTH__LOGOUT_REQUEST';
export const AUTH__LOGOUT_SUCCESS = 'AUTH__LOGOUT_SUCCESS';

export const AUTH__AUTH_URL = `${APP_URL}/auth/ui/tokens`;
