import { API_CALL_REQUEST,API_CALL_SUCCESS,API_CALL_FAILURE } from "../actions/TaskListSaga";
const initialState = {
  tasks: [],
  fetching: false,
  error: null
};

const TaskListSaga = (state = initialState, action) => {
  switch (action.type) {
    case API_CALL_REQUEST:
      return { ...state, fetching: true, error: null };
    case API_CALL_SUCCESS:
      return { ...state, fetching: false, tasks: action.tasks };
    case API_CALL_FAILURE:
      return { ...state, fetching: false, tasks: null, error: action.error };
    default:
      return state;
  }
};

export default TaskListSaga;
