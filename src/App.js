import React from 'react';
import Counter from './Counter';
import ToDoList from './ToDoList';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Counter />
        <ToDoList />
      </div>
    );
  }
}

export default App;
