import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './Components/UserInput';
import TodoList from './Components/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }
}

export default App;
