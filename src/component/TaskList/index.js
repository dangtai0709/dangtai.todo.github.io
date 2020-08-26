import "./TaskList.css";
import React, { Component } from "react";
import List from "./List";
class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          name: "Print bills",
          status: "",
        },
        {
          name: "Call Rampbo",
          status: "completed",
        },
        {
          name: "Print Statements all",
          status: "",
        },
        {
          name: "it be advisable for me to think about business content?",
          status: "completed",
        },
        {
          name: "For what reason would it be advisable for me to think.",
          status: "",
        },
        {
          name: "For what reason would it be advisable.",
          status: "completed",
        },
      ],
    };
  }
  render() {
    return (
      <div className="page-content page-container m-5" id="page-content">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-12">
            <div className="card px-3">
              <div className="card-body">
                <h4 className="card-title">Awesome Todo list</h4>
                <div className="add-items d-flex">
                  <input
                    type="text"
                    className="form-control todo-list-input"
                    placeholder="What do you need to do today?"
                  />
                  <button className="add btn btn-primary font-weight-bold todo-list-add-btn">
                    Add
                  </button>
                </div>
                <div className="list-wrapper">
                  <ul className="d-flex flex-column-reverse todo-list">
                    {this.state.tasks.map((e, i) => (
                      <List key={i} task={e} />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskList;
