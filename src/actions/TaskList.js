import axios from "../axios";
export const ADD_TASK = "ADD_TASK";
export const REMOVE_TASK = "REMOVE_TASK";
export const UPDATE_TASK = "UPDATE_TASK";
export const GET_TASKS = "GET_TASKS";

export const itemsFetchData = (res) => {
  res = Object.keys(res).map((key) => { return {...res[key],id:key}} )
  return {
    type: GET_TASKS,
    value: res,
  };
};
export function getTasks() {
  return (dispatch) => {
    axios
      .get("/tasklist.json")
      .then((response) => {
        if (response.status !== 200) {
          console.log(response.statusText);
        }
        return response;
      })
      .then((response) => dispatch(itemsFetchData(response.data)))
      .catch((e) => console.log(e));
  };
}
export function addTasks(params) {
  return (dispatch) => {
    axios
      .post("/tasklist.json", params)
      .then((response) => {
        if (response.status !== 200) {
          console.log(response.statusText);
        }
        return response;
      })
      .then((response) => dispatch(itemsFetchData(response.data)))
      .catch((e) => console.log(e));
  };
}
export function removeTasks(params) {
  return (dispatch) => {
    axios
      .delete(`/tasklist/${params}.json`)
      .then((response) => {
        if (response.status !== 200) {
          console.log(response.statusText);
        }
        return response;
      })
      .then((response) => dispatch(itemsFetchData(response.data)))
      .catch((e) => console.log(e));
  };
}
export function updateTasks(id, params) {
  return (dispatch) => {
    axios
      .put(`/tasklist/${id}.json`, params)
      .then((response) => {
        if (response.status !== 200) {
          console.log(response.statusText);
        }
        return response;
      })
      .then((response) => dispatch(itemsFetchData(response.data)))
      .catch((e) => console.log(e));
  };
}
