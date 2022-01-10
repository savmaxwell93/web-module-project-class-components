import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super(),
        this.state = {
            input: ""
        }
    }

    handleChanges = e => {
        this.setState({
            ...this.state,
            input: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTask(this.state.input);
    }

    render() {
        return(
            <div>
            <p>New Task Form</p>
            <form onSubmit={this.handleSubmit} >
              <input onChange={this.handleChanges} type='text' placeholder='Add a new task' />
              <button>Add Task</button>
            </form>
          </div>
        )
    }
  }

export default TodoForm;