import * as actionTypes from '../../redux/actions/actionTypes';
import { TodoActions, ITodoState } from 'ultils/types';
import Immutable from 'seamless-immutable';

const initialState: ITodoState = Immutable({
  pending: false,
  todos: [],
  error: null,
});

const todosReducer = (state: ITodoState = initialState, action: TodoActions) => {
  switch (action.type) {
    case actionTypes.FETCH_TODO:
      return {
        ...state,
        pending: true,
      };
    case actionTypes.FETCH_TODO_SUCCESS:
      return {
        ...state,
        pending: false,
        todos: action.payload.todos,
        error: null,
      };
    case actionTypes.FETCH_TODO_FAILED:
      return {
        ...state,
        pending: false,
        todos: [],
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default todosReducer;
