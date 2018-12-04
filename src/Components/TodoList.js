import React, { Component } from 'react';
import UserInput from './UserInput';
import Todo from './Todo';

export default class TodoList extends Component {
  state = {
    todoList : []
  };

  addTodo = (task) => {
    if (task != "") {
      this.setState({
        todoList : this.state.todoList.concat(task)
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
