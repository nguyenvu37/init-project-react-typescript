/* eslint-disable no-case-declarations */
import * as actionTypes from '../actions/actionTypes';
import { IUserAction, IUserState } from 'ultils/types';

const initialState: IUserState = {
  user: false,
};

const userReducer = (state: IUserState = initialState, action: IUserAction) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return { ...state, user: action.payload };
    case actionTypes.LOGOUT:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default userReducer;
