import React, {Component} from 'react';
import './app.css';

import TodoList from './todolist';
import TaskAddForm from './task-add-form';

export default class App extends Component {

  maxId = 1000;

  state = {
    tasks: [
      { text: 'Сделать уборку', id: 1},
      { text: 'Выучить уроки', id: 2},
      { text: 'Помыть посуду', id: 3},
    ]
  }

  deleteTask = (id) => {
    this.setState(({tasks}) => {
      const index = tasks.findIndex((item) => item.id === id);
      const newArray = [...tasks.slice(0, index), ...tasks.slice(index + 1)];
      return {
        tasks: newArray
      };
    })
  }

  addTask = (text) => {
    this.setState(({tasks}) => {
      const newTask = { text: text, id: this.maxId++ }
      const newArray = [...tasks, newTask];
      return {
        tasks: newArray
      }
    })
  }

  render() {
    const { tasks } = this.state;
    return (
      <div className="app">
        <h1>Todo list</h1>
        <TodoList tasks={tasks} deleteTask={this.deleteTask} />
        <TaskAddForm addTask={this.addTask} />
      </div>
    );
  };
}


