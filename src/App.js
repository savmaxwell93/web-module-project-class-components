import React from 'react';
import Todo from './components/Todo'
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const tasks = [
  {
    task: 'Walk Audrey',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Do Dishes',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Cook Dinner',
    id: 152834584358,
    completed: false
  },
  {
    task: 'Buy Baskets',
    id: 153454584358,
    completed: false
  }
]



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks: tasks
    }
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <div>
          <p>Task List</p>
          <ul>
            {this.state.tasks.map(task => {return (<Todo task={task} key={task.id}/>)})}
          </ul>
        </div>
        <div>
          <p>New Task Form</p>
          <form>
            <input type='text' placeholder='Add a new task' />
            <button>Add Task</button>
          </form>
        </div>
        <button>Clear Completed Tasks</button>
      </div>
    );
  }
}

export default App;
