import "./TaskList.css";
import React, { Component} from "react";
import List from "./List";
import {getTasks,addTasks} from '../../actions/TaskList'
import { connect } from 'react-redux';
class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      status:''
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
  handleSubmit(){
    if(!this.state.name) return;
    this.props.addData(this.state)
    this.setState({
      name:'',
      status:''
    });
}
componentDidMount() {
  this.props.fetchData();
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
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                  <button className="add btn btn-primary font-weight-bold todo-list-add-btn"onClick={()=>this.handleSubmit()}>
                    Add
                  </button>
                </div>
                <div className="list-wrapper">
                  <ul className="d-flex flex-column-reverse todo-list">
                    {this.props.tasks.map((e, i) => (
                      <List key={i} task={e} onSubmit={()=> this.props.fetchData()}/>
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
const mapStateToProps = (state) => {
  return {
      tasks: state.TaskList.tasks
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      fetchData: () => dispatch(getTasks()),
      addData: (data) => dispatch(addTasks(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);

