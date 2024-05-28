import React, { Component } from 'react';

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
      tasks: []
    };
  }

  handleInputChange = (event) => {
    this.setState({ task: event.target.value });
  };

  addTask = () => {
    if (this.state.task.trim()) {
      this.setState((prevState) => ({
        tasks: [...prevState.tasks, prevState.task],
        task: ''
      }));
    }
  };

  render() {
    return (
      <div className="todo-list">
        <h1>To-Do List</h1>
        <input
          type="text"
          value={this.state.task}
          onChange={this.handleInputChange}
          placeholder="Enter task"
        />
        <button onClick={this.addTask}>Add Task</button>
        <ul>
          {this.state.tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ToDoList;
