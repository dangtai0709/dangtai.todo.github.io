import React, { Component } from "react";
import {removeTasks,updateTasks} from '../../../actions/TaskList'
import { connect } from 'react-redux';
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      name: props.task.name,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  handleEdit(value){
    this.setState((prevState) => ({
        ...prevState,
        edit: value,
      }));
  }
  handleSubmit(){
      if(!this.state.name) return;
      let data = {...this.props.task,...this.state};
      delete data.edit
      delete data.id
      this.props.updateData(this.props.task.id,data)
      this.handleEdit(false);
      this.props.onSubmit()
  }
  handleRemove(){
    this.props.removeData(this.props.task.id)
    this.props.onSubmit()
}
  render() {
    return (
      <li className={this.props.task.status === "completed" ? "completed" : ""}>
        <div className="form-check">
          {this.state.edit ? (
              <div>
            <input
              className="form-control todo-list-input"
              type="text"
              name="name"
              placeholder="Default input"
              value={this.state.name}
              onChange={this.handleChange}
            ></input>
            <button type="submit" className="btn btn-primary mt-1" onClick={()=>this.handleSubmit(true)}>Submit</button>
            </div>
          ) : (
            <label className="form-check-label">
              <input
                className="checkbox"
                type="checkbox"
                defaultChecked={this.props.task.status === "completed"}
              />
              {this.props.task.name}
              <i className="input-helper"></i>
            </label>
          )}
        </div>
        <i className="remove mdi mdi-close-circle-outline" onClick={()=>this.handleRemove()}></i>
        {!this.state.edit &&
        <i
          className="fa fa-edit cursor-pointer m-2"
          onClick={()=>this.handleEdit(true)}
        ></i>}
      </li>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      removeData: (data) => dispatch(removeTasks(data)),
      updateData: (id,data) => dispatch(updateTasks(id,data)),
  };
};
export default connect(null,mapDispatchToProps)(List);
