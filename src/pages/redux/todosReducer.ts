// import * as actionTypes from '../../redux/actions/actionTypes';
// import { ITodoState, ITodos } from 'ultils/types';
// import Immutable, { ImmutableObject } from 'seamless-immutable';

// const initialState: ImmutableObject<ITodoState> = Immutable({
//   pending: false,
//   todos: [],
//   error: null,
//   count: 1,
// });

// const todosReducer: ITodos = (state = initialState, action) => {
//   switch (action.type) {
//     case actionTypes.FETCH_TODO:
//       return state.merge({
//         pending: true,
//         count: state.count + 1,
//       });
//     case actionTypes.FETCH_TODO_SUCCESS:
//       return state.merge({
//         pending: false,
//         todos: action.payload.todos,
//         error: null,
//       });
//     case actionTypes.FETCH_TODO_FAILED:
//       return state.merge({
//         pending: false,
//         todos: [],
//         error: action.payload.error,
//       });
//     default:
//       return state;
//   }
// };

// export default todosReducer;

import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import { ImmutableObject } from 'seamless-immutable';
import { ITodos, ITodoState } from 'ultils/types';

export const { Types, Creators } = createActions({
  fetchTodo: null,
  fetchTodoSuccess: ['payload'],
  fetchTodoFailed: ['payload'],
});

export const INITIAL_STATE: ImmutableObject<ITodoState> = Immutable({
  pending: false,
  todos: [],
  error: null,
  count: 1,
});

const fetchTodo: ITodos = (state = INITIAL_STATE) =>
  Immutable(state).merge({
    pending: true,
    count: state.count + 1,
  });

const fetchTodoSuccess: ITodos = (state = INITIAL_STATE, action) =>
  Immutable(state).merge({
    pending: false,
    todos: action.payload.todos,
    error: null,
  });

const fetchTodoFailed: ITodos = (state = INITIAL_STATE, action) =>
  Immutable(state).merge({
    pending: false,
    todos: [],
    error: action.payload.error,
  });

const HANDLERS = {
  [Types.FETCH_TODO]: fetchTodo,
  [Types.FETCH_TODO_SUCCESS]: fetchTodoSuccess,
  [Types.FETCH_TODO_FAILED]: fetchTodoFailed,
};

export const todosReducer = createReducer(INITIAL_STATE, HANDLERS);
