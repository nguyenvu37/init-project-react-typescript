import { API, ROUTES } from 'api/Api';
import { call, put, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../../redux/actions/actionTypes';

function* fetchTodoSaga() {
  yield takeLatest(actionTypes.FETCH_TODO, fetchTodo);
}

function* fetchTodo() {
  try {
    const res = yield call(() => API.get(ROUTES.FETCH_TODO));
    if (res.ok) {
      yield put({
        type: actionTypes.FETCH_TODO_SUCCESS,
        payload: {
          todos: res.data,
          error: null,
        },
      });
    } else {
      yield put({
        type: actionTypes.FETCH_TODO_FAILED,
        payload: {
          todos: [],
          error: res.status,
        },
      });
    }
  } catch (error) {
    console.log(`error`, error);
  }
}

export default fetchTodoSaga;
