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
  return state.merge({
    type: action.type,
    count: state.count + action.payload,
  });
};

const descrement: INews = (state, action) => {
  return state.merge({
    type: action.type,
    count: state.count - action.payload,
  });
};

// Assign handler to types.
const HANDLERS = {
  [Types.INCREMENT]: increment,
  [Types.DESCREMENT]: descrement,
};

// Create reducers by pass state and handlers
export const newsReducer = createReducer(INITIAL_STATE, HANDLERS);
