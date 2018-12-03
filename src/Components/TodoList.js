import React, { Component } from 'react';
import UserInput from './UserInput';
import Todo from './Todo';

export default class TodoList extends Component {
  state = {
    todoList : []
  };

  addTodo = (task) => {
    if (task != "") {
      this.state.todoList.push(task);
      this.setState({
        todoList : this.state.todoList
      })
    }
  }

  render() {
    return (
      <div>
        <UserInput onUpdate={this.addTodo} />
        <h2>Todos</h2>
        <ul>
          {this.state.todoList.map((todo) => <Todo task={todo}/>)}
        </ul>
      </div>
    );
  }
}
