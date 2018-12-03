import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './Components/UserInput';
import TodoList from './Components/TodoList';

class App extends Component {
  state = {
    todoList : []
  }

  addTodo = (task) => {
    this.state.todoList.push(task);
    console.log(this.state.todoList);
  }

  render() {
    return (
      <div className="App">
        <UserInput onUpdate={this.addTodo} />
        <TodoList todoList={this.state.todoList} />
      </div>
    );
  }
}

export default App;
