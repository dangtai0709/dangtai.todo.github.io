import React, { Component } from "react";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      string: props.task.name,
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
      this.handleEdit(false);
  }
  handleRemove(){
  console.log('x')
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
              name="string"
              placeholder="Default input"
              value={this.state.string}
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

export default List;
