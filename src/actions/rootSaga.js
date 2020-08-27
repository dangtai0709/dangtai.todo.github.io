import { all } from 'redux-saga/effects';
import  TaskListSaga  from './TaskListSaga'
export default function* rootSaga() {
    yield all([ // gọi nhiều saga
        TaskListSaga()
    ]);
}