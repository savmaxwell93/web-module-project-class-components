import React from 'react';

class Todo extends React.Component {

    handleClick = () => {
        this.props.handleToggleItem(this.props.task)
    }

    render() {
        return (
          <li onClick={this.handleClick}>{this.props.task.task} {this.props.task.completed ? <span>--Completed--</span> : <span></span>} </li>
        )
    }
  }

export default Todo;