import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import { INews, InitalStateNews } from '../../ultils/types';

export const { Types, Creators } = createActions({
  increment: ['payload'],
  descrement: ['payload'],
});

// Initial state
export const INITIAL_STATE: InitalStateNews = Immutable({
  count: 0,
  type: '',
});

const increment: INews = (state, action) => {
  const num: number = state.count + action.payload;
  return state.merge({
    type: action.type,
    count: num,
  });
};

const descrement: INews = (state, action) => {
  const num = state.count - action.payload;
  return state.merge({
    type: action.type,
    count: num,
  });
};

// Assign handler to types.
const HANDLERS = {
  [Types.INCREMENT]: increment,
  [Types.DESCREMENT]: descrement,
};

// Create reducers by pass state and handlers
export const newsReducer = createReducer(INITIAL_STATE, HANDLERS);
