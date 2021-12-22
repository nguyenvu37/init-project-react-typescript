import * as actionTypes from './actionTypes';
import {
  FetchTodoRequest,
  FetchTodoSuccessPayload,
  FetchTodoSuccess,
  FetchTodoFailurePayload,
  FetchTodoFailure,
} from './../../ultils/types';

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

export const fetchTodo = (): FetchTodoRequest => {
  return {
    type: actionTypes.FETCH_TODO,
  };
};

export const fetchTodoSuccess = (payload: FetchTodoSuccessPayload): FetchTodoSuccess => ({
  type: actionTypes.FETCH_TODO_SUCCESS,
  payload,
});

export const fetchTodoFailed = (payload: FetchTodoFailurePayload): FetchTodoFailure => ({
  type: actionTypes.FETCH_TODO_FAILED,
  payload,
});
