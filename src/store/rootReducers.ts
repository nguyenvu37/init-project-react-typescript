import { combineReducers } from 'redux';
import userReducer from 'redux/reducers/userReducer';
import { newsReducer } from './../pages/redux/newsReducer';
import { todosReducer } from './../pages/redux/todosReducer';

const appReducer = combineReducers({
  userReducer,
  newsReducer,
  todosReducer,
});

export type AppState = ReturnType<typeof appReducer>;
export default appReducer;
