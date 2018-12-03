import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './Components/UserInput';
import TodoList from './Components/TodoList';

class App extends Component {
  state = {
    todoList : []
  }

  render() {
    return (
      <div className="App">
        <TodoList todoList={this.state.todoList} />
      </div>
    );
  }
}

export default App;
