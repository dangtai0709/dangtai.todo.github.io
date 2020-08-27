import axios from "../axios";
import { put, call, fork, takeEvery, all } from "redux-saga/effects";
export const API_CALL_REQUEST = "API_CALL_REQUEST";
export const API_CALL_SUCCESS = "API_CALL_SUCCESS";
export const API_CALL_FAILURE = "API_CALL_FAILURE";

export const ADD_TASK_REQUEST = "ADD_TASK_REQUEST";
export const UPDATE_TASK_REQUEST = "UPDATE_TASK_REQUEST";
export const REMOVE_TASK_REQUEST = "REMOVE_TASK_REQUEST";

export default function* TaskListSaga() {
  yield all([
    fork(watchGetTasks),
    fork(watchAddTask),
    fork(watchRemoveTasks),
    fork(watchUpdateTasks),
  ]);
}
//
function* getTasks() {
  try {
    let data = yield call(() =>
      axios.get("/tasklist.json").then((r) => r.data)
    );
    data = data
      ? Object.keys(data).map((key) => {
        return { ...data[key], id: key };
      })
      : [];
    yield put({ type: API_CALL_SUCCESS, tasks: data });
  } catch (e) {
    yield put({ type: API_CALL_FAILURE, e });
  }
}

function* watchGetTasks() {
  yield takeEvery(API_CALL_REQUEST, getTasks);
}

///
function* addTask(action) {
  try {
    yield call(() => axios.post("/tasklist.json", action.data));
    yield call(() => getTasks());
  } catch (e) {
    yield put({ type: API_CALL_FAILURE, e });
  }
}
function* watchAddTask() {
  yield takeEvery(ADD_TASK_REQUEST, addTask);
}
////
function* removeTask(action) {
  try {
    yield call(() => axios.delete(`/tasklist/${action.id}.json`));
    yield call(() => getTasks());
  } catch (e) {
    yield put({ type: API_CALL_FAILURE, e });
  }
}
function* watchRemoveTasks() {
  yield takeEvery(REMOVE_TASK_REQUEST, removeTask);
}
///
function* updateData(action) {
  try {
    yield call(() => axios.put(`/tasklist/${action.id}.json`, action.data));
    yield call(() => getTasks());
  } catch (e) {
    yield put({ type: API_CALL_FAILURE, e });
  }
}
function* watchUpdateTasks() {
  yield takeEvery(UPDATE_TASK_REQUEST, updateData);
}
