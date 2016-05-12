import { fromJS } from 'immutable';

import Parse from 'parse';

import * as users from '../api/users';
import { EventTypes } from 'redux-segment';
export const LOGIN_PENDING = '@@reactTraining/LOGIN_PENDING';
export const LOGIN_SUCCESS = '@@reactTraining/LOGIN_SUCCESS';
export const LOGIN_ERROR = '@@reactTraining/LOGIN_ERROR';
export const REGISTER_PENDING = '@@reactTraining/REGISTER_PENDING';
export const REGISTER_SUCCESS = '@@reactTraining/REGISTER_SUCCESS';
export const REGISTER_ERROR = '@@reactTraining/REGISTER_ERROR';
export const LOGOUT = '@@reactTraining/LOGOUT';

const currentUser = Parse.User.current();

const INITIAL_STATE = fromJS({
  pending: false,
  hasError: false,
  code: null,
  message: false,
  authenticated: currentUser && currentUser.authenticated(),
  username: currentUser ? currentUser.get('username') : null,
  id: currentUser ? currentUser.id : null,
  displayName: currentUser ? currentUser.get('displayName') : null,
});

function sessionReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {

    case LOGIN_PENDING:
      return state.set('pending', true)
                  .set('hasError', false);

    case LOGIN_SUCCESS:
      return state.merge(fromJS({
        pending: false,
        authenticated: true,
        ...action.payload,
      }));

    case LOGIN_ERROR:
      return state.merge(fromJS({
        pending: false,
        hasError: true,
        authenticated: false,
        ...action.payload,
      }));

    case LOGOUT:
      return state.merge(fromJS({
        pending: false,
        hasError: false,
        code: null,
        message: false,
        authenticated: false,
        username: null,
        id: null,
        displayName: null,
      }));

    case REGISTER_PENDING:
      return state.set('pending', true)
                  .set('hasError', false);

    case REGISTER_SUCCESS:
      return state.merge(fromJS({
        pending: false,
        authenticated: true,
        ...action.payload,
      }));

    case REGISTER_ERROR:
      return state.merge(fromJS({
        pending: false,
        hasError: true,
        authenticated: false,
        ...action.payload,
      }));

    default:
      return state;
  }
}

export function login({ username, password }) {
  return (dispatch) => {
    dispatch({ type: LOGIN_PENDING, meta: {
      analytics: EventTypes.track,
    } });

    return users.login(username, password)
      .then(res => dispatch({
        type: LOGIN_SUCCESS,
        payload: res,
      }))
      .then(null, err => dispatch({
        type: LOGIN_ERROR,
        payload: err,
        meta: {
          analytics: EventTypes.track,
        },
      }));
  };
}

export function logout() {
  return (dispatch) => {
    return users.logout()
      .then(dispatch({ type: LOGOUT }));
  };
}

export function register({ username, password, email, displayName }) {
  return (dispatch) => {
    dispatch({ type: REGISTER_PENDING });

    return users.create(username, password, email, displayName)
      .then(res => dispatch({
        type: REGISTER_SUCCESS,
        payload: res,
      }))
      .then(null, err => dispatch({
        type: REGISTER_ERROR,
        payload: err,
      }));
  };
}

export default sessionReducer;
