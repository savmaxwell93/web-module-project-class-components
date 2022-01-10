import React from 'react';
import TodoList from './components/TodoList'
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
  // Mark Completed
  // handleToggleItem = () => {

  // }

  //Add Task
  // addTask = () => {

  // }

  //Clear Completed
  handleClear = () => {
    console.log('clicked clear button')
    this.setState({
      ...this.state,
      tasks: this.state.tasks.filter(task => {
        return !task.completed;
      })
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList tasks={this.state.tasks} handleToggleItem={this.handleToggleItem} />
        <TodoForm/>
        <button onClick={this.handleClear}>Clear Completed Tasks</button>
      </div>
    );
  }
}

export default App;
