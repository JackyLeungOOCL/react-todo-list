import React, { Component } from 'react';
import Todo from './Todo';

export default class TodoList extends Component {
  state = {
    todoList : new Array(1).fill(0)
  };

  render() {
    return (
      <div>
        <h2>Todos</h2>
        <ul>
          {this.state.todoList.map((todo) => <Todo task={todo}/>)}
        </ul>
      </div>
    )
  }
}
