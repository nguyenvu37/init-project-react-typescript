import * as actionTypes from '../actions/actionTypes';
import { IUserAction, IUserState } from '../../ultils/types';
import Immutable from 'seamless-immutable';

const initialState: IUserState = Immutable({
  user: false,
});

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
