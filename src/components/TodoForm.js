import React from 'react';

class TodoForm extends React.Component {
    render() {
        return(
            <div>
            <p>New Task Form</p>
            <form>
              <input type='text' placeholder='Add a new task' />
              <button>Add Task</button>
            </form>
          </div>
        )
    }
  }

export default TodoForm;