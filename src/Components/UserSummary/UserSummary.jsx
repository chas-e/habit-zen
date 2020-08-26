import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import  './UserSummary.css';
import todoService from '../../utils/todoService';
import habitService from '../../utils/habitService';
import EditTodoButton from '../EditTodoButton/EditTodoButton';
// import EditTodoModal from '../EditTodoModal/EditTodoModal';
// import user from '../../../models/user';


class UserSummary extends Component {
  constructor(props) {
  super(props);
  this.state = {todos: {text: '', done: false}}
  
  }

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
  console.log("handle", todo)
  await todoService.editToDo(todo);
  this.refreshContent();
}

handleDeleteHabit = async (habit) => {
  await habitService.deleteHabit(habit);
  this.refreshContent();
}


  render() {
    const todoRows = this.props.todos.map((todo, idx) => (
      <ul> 
      <li className="ToDoList" key={idx}>
      <span className="badge">{idx + 1}</span>&nbsp;&nbsp;&nbsp;&nbsp;
      {/* <button onClick={this.handleEditToDo}><span role="img" aria-label="edit">✏️</span></button> */}
        <button type="checkbox" name="done" >Done</button>&nbsp;&nbsp;
        <button onClick={() => this.handleDeleteToDo(todo)}><span role="img" aria-label="delete">🚯</span></button> &nbsp;&nbsp;
        
      <EditTodoButton
        {...this.props}
        handleEditToDo={this.handleEditToDo}
        todo={todo}
        todoId={todo._id}/>&nbsp;&nbsp;
        {todo.text}&nbsp;&nbsp;
        {todo.done}&nbsp;&nbsp;

        {/* <EditTodoModal 
        {...this.props}
        handleEditToDo={this.handleEditToDo}
        todo={todo}/>&nbsp;&nbsp; */}
      </li>
    </ul>
    ));

    const habitRows = this.props.habits.map((habit, idx) => (
      <ul> 
      <li className="HabitList" key={idx}>
        <button type="checkbox" name="done" value={this.props.habit ? 'checked' : '' } onChange={this.handleChange}>Done</button>&nbsp;&nbsp;
        <button onClick={() => this.handleDeleteHabit(habit)}><span role="img" aria-label="delete">🚯</span></button> &nbsp;&nbsp;
        <button onClick={() => this.handleEditHabit(habit)}><span role="img" aria-label="edit">✏️</span></button>&nbsp;&nbsp;
        <span className="badge">{idx + 1}</span>&nbsp;&nbsp;&nbsp;&nbsp;
        {habit.habit}&nbsp;&nbsp;
      </li>
        </ul>
    ));

      const goalRows = this.props.habits.map((habit, idx) => (
        <tr key={idx}>
            {/* <button className='checkbox' type="checkbox" name="done" value={this.props.habit ? 'checked' : '' } onChange={this.handleChange}>Done</button> */}
          <td><span className="badge">{idx + 1}</span></td>
          <td>{habit.goal}</td>
        </tr>

    ));
  return(
  <div>
    <h2> UserSummary </h2>
    <div id='ToDoList'>
        <header className='header-footer'>To Do List</header>
        <Link to="/newtodo">Add New To Do</Link>
        {this.props.todos.length ? 
       
            [todoRows] 
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
          [habitRows] 
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
