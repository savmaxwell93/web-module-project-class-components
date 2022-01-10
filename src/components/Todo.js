import React from 'react';

class Todo extends React.Component {
    render() {
        return (
          <li>{this.props.task.task} {this.props.task.completed ? <span>--Completed--</span> : <span></span>} </li>
        )
    }
  }

export default Todo;