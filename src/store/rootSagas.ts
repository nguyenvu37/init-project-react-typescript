import addTodoSaga from 'pages/sagas/todoSagas';
import { all } from 'redux-saga/effects';

export default function* RootSagas() {
  yield all([addTodoSaga()]);
}
