import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './UserSummary.css';
import todoService from '../../utils/todoService';
import habitService from '../../utils/habitService';
import GoalTracker from '../GoalTracker/GoalTracker';
import EditTodoButton from '../EditTodoButton/EditTodoButton';
import EditHabitButton from '../EditHabitButton/EditHabitButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';


class UserSummary extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todo: {
        done: false
      }
    }
  };


  async componentDidMount() {
    this.refreshContent();
  }

  refreshContent = async () => {
    const todos = await todoService.index(this.props.user);
    const habits = await habitService.index(this.props.user);
    this.props.handleUpdateTodos(todos);
    this.props.handleUpdateHabits(habits);
  }

  handleDeleteToDo = async (todo) => {
    await todoService.deleteToDo(todo);
    this.refreshContent();
  }

  handleEditToDo = async (todo, updatedToDo) => {
    await todoService.editToDo(todo, updatedToDo);
    this.refreshContent();
  }

  handleEditHabit = async (habit, updatedHabit) => {
    await habitService.editHabit(habit, updatedHabit);
    this.refreshContent();
  }

  handleDeleteHabit = async (habit) => {
    await habitService.deleteHabit(habit);
    this.refreshContent();
  }

  handleUpdateHabit = async (habit) => {
    let update = habit;
    if (update.done) {
      update.done = false
    } else {
      update.done = true
    }
    await habitService.doneHabit(update);
    const habits = await habitService.index(this.props.user);
    this.props.handleUpdateHabits(habits);
  }

  handleUpdateToDo = async (todo) => {
    let update = todo;
    if (update.done) {
      update.done = false
    } else {
      update.done = true
    }
    await todoService.doneToDo(todo);
    const todos = await todoService.index(this.props.user);
    this.props.handleUpdateTodos(todos);
  }


  handleDeleteToDo = async (todo) => {
    await todoService.deleteToDo(todo);
    this.refreshContent();
  }

  render() {

    const todoRows = this.props.todos.map((todo, idx) => (

      <ul key={idx}>
        <li className="ToDoList">
          <input type="checkbox" name="done" checked={todo.done} onChange={() => this.handleUpdateToDo(todo)} />&nbsp;&nbsp;Done&nbsp;&nbsp;
        <button onClick={() => this.handleDeleteToDo(todo)}><span role="img" aria-label="delete">🚯</span></button> &nbsp;&nbsp;
      <EditTodoButton
            {...this.props}
            refreshContent={this.refreshContent}
            handleEditToDo={this.handleEditToDo}
            todo={todo} />&nbsp;&nbsp;
        <span className="badge">{idx + 1}</span>&nbsp;&nbsp;&nbsp;&nbsp;
        {todo.text}&nbsp;&nbsp;
        {todo.done}&nbsp;&nbsp;
      </li>
      </ul>
    ));
    const habitRows = this.props.habits.map((habit, idr) => (
      <ul key={idr}>
        <li className="HabitList">
          <input type="checkbox" name="done" value={this.state.done} checked={habit.done} onChange={() => this.handleUpdateHabit(habit)} /> &nbsp;&nbsp;Done&nbsp;&nbsp;
        <button onClick={() => this.handleDeleteHabit(habit)}><span role="img" aria-label="delete">🚯</span></button> &nbsp;&nbsp;
        <EditHabitButton
            {...this.props}
            refreshContent={this.refreshContent}
            handleEditHabit={this.handleEditHabit}
            habit={habit} />&nbsp;&nbsp;
        <span className="badge">{idr + 1}</span>&nbsp;&nbsp;&nbsp;&nbsp;
        {habit.habit}&nbsp;&nbsp;
      </li>
      </ul>
    ));

    const goalRows = this.props.habits.map((habit, idx) => (
      <tr key={idx}>
        <td><span className="badge">{idx + 1}</span></td>
        <td>{habit.goal}</td>
        <td>
          <GoalTracker
            {...this.props}
            habit={habit}
          />
        </td>
      </tr>
    ));
    return (
      <div className='usersummary'>

        <br />

        <div className='user-cards' style={{ justifyContent: "center", }}>
          <Card
            style={{ width: '50rem', height: 'fit-content' }}
            className="mb-2">
            <div id='ToDoList' >
              <Card.Header
              >
                <h3 className='header-footer'>To Do List</h3>
                <Link to="/newtodo">Add New To Do</Link>
              </Card.Header>
              <br />
              <Card.Body>

                {this.props.todos.length ?

                  [todoRows]
                  :
                  <h5 className='text-info'>No To Do List Items Yet</h5>

                }
              </Card.Body>
            </div>
            <br />
          </Card>

          <Card
            style={{ width: '50rem', height: 'fit-content' }}
            className='mb-2'
          >
            <div id='HabitList'>
              <Card.Header
              >
                <h3 className='header-footer'>Habits</h3>
                <Link to="/newhabit">Add New Goal</Link>
              </Card.Header>
              <br />
              <Card.Body>
                {this.props.habits.length ?
                  [habitRows]
                  :
                  <h5 className='text-info'>No Habits Yet</h5>
                }
              </Card.Body>

            </div>
            <br />
            <br />
          </Card>
          <br />
          <Card style={{ width: '100%', maxWidth: '100rem', height: 'fit-content' }}
            className="mb-2">
            <div id='GoalList'>
              <Card.Header
              >
                <h3 className='header-footer'>Goals</h3></Card.Header>
              <br />
              <Card.Body>

                {this.props.habits.length ?
                  <table>
                    <thead>
                      <tr><th width={100}></th></tr>
                    </thead>
                    <tbody>

                      {goalRows}
                    </tbody>
                  </table>
                  :
                  <h5 className='text-info'>No Goals Yet</h5>
                }
              </Card.Body>
            </div>
            <br />
            <br />
          </Card>
        </div>

        <br />
        <br />
      </div>


    );
  }
};



export default UserSummary;      
