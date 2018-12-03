import React, { Component } from 'react'

export default class Todo extends Component {
  state = {task : this.props.task};

  render() {
    return (
      <li>
        {this.state.task}
      </li>
    )
  }
}
