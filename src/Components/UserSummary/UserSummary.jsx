import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './UserSummary.css';
import todoService from '../../utils/todoService';
import habitService from '../../utils/habitService';
// import user from '../../../models/user';

class UserSummary extends Component {

  async componentDidMount() {
    this.refreshContent();
  }

  refreshContent = async () => {
    const todos = await todoService.index();
    const habits = await habitService.index();
    this.props.handleUpdateTodos(todos);
    this.props.handleUpdateHabits(habits);
  }

  handleDeleteToDo = async (todo) => {
    await todoService.deleteToDo(todo);
    this.refreshContent();
  }

  handleEditToDo = async (todo) => {
    await todoService.deleteToDo(todo);
    this.refreshContent();
  }

  handleDeleteHabit = async (habit) => {
    await habitService.deleteHabit(habit);
    this.refreshContent();
  }


  render() {
    const todoRows = this.props.todos.map((todo, idx) => (
      <tr key={idx}>


        <button type="checkbox" name="done" value={this.props.NewToDo ? 'checked' : ''} onChange={this.handleChange}>Done</button>
        <td><span className="badge">{idx + 1}</span></td>
        <td>{todo.text}</td>
        <td>{todo.done}</td>
        {/* <button onClick={() => this.props.deleteTodos(todos.id)}
        className="button muted-button">
          Delete
        </button> */}
        <td><button onClick={() => this.handleDeleteToDo(todo)}><span role="img" aria-label="delete">🚯</span></button></td>
        <td><button onClick={() => this.handleEditToDo(todo)}><span role="img" aria-label="edit">✏️</span></button></td>

      </tr>
    ));
    const habitRows = this.props.habits.map((habit, idx) => (
      <tr key={idx}>

        <button className='checkbox' type="checkbox" name="done" value={this.props.habit ? 'checked' : ''} onChange={this.handleChange}>Done</button>

        <td><span className="badge">{idx + 1}</span></td>
        <td>{habit.habit}</td>
        <td><button onClick={() => this.handleDeleteHabit(habit)}><span role="img" aria-label="delete">🚯</span></button></td>
      </tr>
    ));

    const goalRows = this.props.habits.map((habit, idx) => (
      <tr key={idx}>
        {/* <button className='checkbox' type="checkbox" name="done" value={this.props.habit ? 'checked' : '' } onChange={this.handleChange}>Done</button> */}
        <td><span className="badge">{idx + 1}</span></td>
        <td>{habit.goal}</td>
      </tr>

    ));
    return (
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

        <div id='HabitList'>
          <header className='header-footer'>Habits</header>
          <Link to="/newhabit">Add New Goal</Link>
          {this.props.habits.length ?
            <table>
              <thead>
                <tr><th width={100}>Habits</th></tr>
              </thead>
              <tbody>
                {habitRows}
              </tbody>
            </table>
            :
            <h5 className='text-info'>No Habits Yet</h5>
          }
        </div>
        <br />
        <br />
        <div id='GoalList'>
          <header className='header-footer'>Goals</header>
          {this.props.habits.length ?
            <table>
              <thead>
                <tr><th width={100}>Goals</th></tr>
              </thead>
              <tbody>

                {goalRows}
              </tbody>
            </table>
            :
            <h5 className='text-info'>No Goals Yet</h5>
          }
        </div>
        <br />
        <br />
      </div>

    );
  }
};


export default UserSummary;      
