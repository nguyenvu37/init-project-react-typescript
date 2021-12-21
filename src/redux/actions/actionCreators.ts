import * as actionTypes from './actionTypes';

export const login = (payload: boolean) => {
  return {
    type: actionTypes.LOGIN,
    payload,
  };
};

export const logout = (payload: boolean) => {
  return {
    type: actionTypes.LOGOUT,
    payload,
  };
};
