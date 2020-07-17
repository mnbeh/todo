import React, {Component} from 'react';
import './task-add-form.css';

export default class TaskAddForm extends Component {

  state = {
    input: ''
  };

  onHandleChange = (e) => {
    this.setState({
        input: e.target.value
      }
    );
  }

  addTaskSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state.input);
    this.setState({input: ''})
  }

  render() {
    const { input } = this.state;
    return(
      <div>
        <form onSubmit={this.addTaskSubmit}>
          <input required type="text" value={input} onChange={this.onHandleChange} placeholder="Enter task" />
          <button className="button">Add task</button>
        </form>
      </div>
    );
  };
};
