import React from 'react';
import Todo from './Todo';
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
class TodoList extends React.Component {
    render() {
        return (
            <div>
                <p>Task List</p>
                <ul>
                    {this.props.tasks.map(task => {return (<li>{task.task} {task.completed ? <span>--Completed--</span> : <span></span>} </li>)})}
                </ul>
            </div>
        )
    }
}

export default TodoList;