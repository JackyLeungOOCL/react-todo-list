import React, { Component } from 'react'

export default class UserInput extends Component {
  addTodo = () => {
    let inputField = document.querySelector("input");
    let task = inputField.value;
    this.props.onUpdate(task);
    inputField.value = "";
  }

  render() {
    return (
      <div>
        <input></input>
        <button onClick={this.addTodo}>add todo</button>
      </div>
    )
  }
}
