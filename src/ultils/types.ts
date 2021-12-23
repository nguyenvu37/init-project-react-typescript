// import { AnyAction } from 'redux';
import { ImmutableObject } from 'seamless-immutable';
import { FETCH_TODO, FETCH_TODO_SUCCESS, FETCH_TODO_FAILED } from './../redux/actions/actionTypes';
export interface IButtonProps {
  handleClick: () => void;
  text: string;
  customClass?: string;
}

export interface IUserState {
  user: boolean;
}

export interface IUserAction {
  type: string;
  payload: boolean;
}

export interface INewsState {
  type: string;
  count: number;
  merge: (arg0: { type: string; count: number }) => void;
}

export interface INewsAction {
  type: string;
  payload: number;
}

export interface InitalStateNews {
  count: number;
  type: string;
}

export interface INews {
  (
    state: ImmutableObject<InitalStateNews>,
    action: { type: string; payload: number },
  ): ImmutableObject<InitalStateNews>;
}

export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface IObj {
  count: number;
}

export interface ITodoState {
  pending: boolean;
  todos?: ITodo[];
  error?: number | null;
  count: number;
}

export interface ITodos {
  (state: ImmutableObject<ITodoState>, action: { type: string; payload: ITodoState }): ImmutableObject<ITodoState>;
}

export interface FetchTodoSuccessPayload {
  todos: ITodo[];
}

export interface FetchTodoFailurePayload {
  error: number;
}

export interface FetchTodoRequest {
  type: typeof FETCH_TODO;
}

export type FetchTodoSuccess = {
  type: typeof FETCH_TODO_SUCCESS;
  payload: FetchTodoSuccessPayload;
};

export type FetchTodoFailure = {
  type: typeof FETCH_TODO_FAILED;
  payload: FetchTodoFailurePayload;
};

export type TodoActions = FetchTodoRequest | FetchTodoSuccess | FetchTodoFailure;
