import {
  ADD_TASK,
  REMOVE_TASK,
  UPDATE_TASK,
  GET_TASKS,
} from "../actions/TaskList";
const initialState = {
  task: [],
};

const TaskList = (state = initialState, { type, value }) => {
  switch (type) {
    case GET_TASKS:
      return {
        ...state,
        task: value,
      };
    // case UPDATE_TASK:
    //   return {
    //     ...state,
    //     task: value,
    //   };
    // case REMOVE_TASK:
    //   return {
    //     ...state,
    //     task: value,
    //   };
    // case ADD_TASK:
    //   return {
    //     ...state,
    //     task: value,
    //   };
    default:
      return state;
  }
};

export default TaskList;
