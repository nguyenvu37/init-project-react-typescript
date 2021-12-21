import { combineReducers } from 'redux';
import userReducer from 'redux/reducers/userReducer';

const appReducer = combineReducers({
  userReducer: userReducer,
});

export type AppState = ReturnType<typeof appReducer>;
export default appReducer;
