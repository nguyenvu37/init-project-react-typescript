import { AnyAction } from 'redux';
import { ImmutableObject } from 'seamless-immutable';
export interface IButtonProps {
  handleClick: () => void;
  text: string;
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
