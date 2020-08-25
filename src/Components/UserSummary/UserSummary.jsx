import React, { Component } from './node_modules/react';
import { Link } from './node_modules/react-router-dom';
import './UserSummary.css';
import todoService from '../../utils/todoService';

class UserSummary extends Component {

  // async componentDidMount() {
  //   const todos = await todoService.index();
  //   this.props.updateTodos(todos);
  // }

  render() {
    const todoRows = this.props.todos.map((todo, idx) => (
      <tr key={idx}>
        <td><span className="badge">{idx + 1}</span></td>
        <td>{todo.todo}</td>
        <td>{todo.done}</td>
      </tr>
    ));
  return(
  <div>
    <h2> UserSummary </h2>
    <div id='ToDoList'>
        <header className='header-footer'>To Do List</header>
        <Link to="/newtodo">Add New To Do</Link>
        {this.props.todos.length ? 
          <table>
            <thead>
              <tr><th width={100}>List</th><th width={100}>Done?</th></tr>
            </thead>
            <tbody>
              {todoRows}
            </tbody>
          </table>
          :
          <h5 className='text-info'>No To Do List Items Yet</h5>
        }
        </div>
    <br />
    <br />
    <Link to="/newhabit">Add New Habits</Link>

      </div>

    );
  }
};


export default UserSummary;      
