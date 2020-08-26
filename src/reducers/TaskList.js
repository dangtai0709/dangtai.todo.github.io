import { GET_TASKS } from "../actions/TaskList";
const initialState = {
  tasks: [],
};

const TaskList = (state = initialState, { type, value }) => {
  switch (type) {
    case GET_TASKS:
      return {
        ...state,
        tasks: value?value:[],
      };
    default:
      return state;
  }
};

export default TaskList;
