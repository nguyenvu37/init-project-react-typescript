import { combineReducers } from 'redux';
import userReducer from 'redux/reducers/userReducer';
import { newsReducer } from './../pages/redux/newsReducer';

const appReducer = combineReducers({
  userReducer,
  newsReducer,
});

export type AppState = ReturnType<typeof appReducer>;
export default appReducer;
