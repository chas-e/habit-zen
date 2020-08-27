import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import  './UserSummary.css';
import todoService from '../../utils/todoService';
import habitService from '../../utils/habitService';
import EditTodoButton from '../EditTodoButton/EditTodoButton';
import EditHabitButton from '../EditHabitButton/EditHabitButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
// import { color, variant } from 'react-bootstrap/types';



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
if(update.done) {
  update.done = false
}else{
  update.done = true
}
  await habitService.doneHabit(update);
    const habits = await habitService.index();
    this.props.handleUpdateHabits(habits);
}

handleUpdateToDo = async (todo) => {
let update = todo;
if(update.done) {
  update.done = false
}else{
  update.done = true
}
  await todoService.doneToDo(todo);
    const todos = await todoService.index();
    this.props.handleUpdateTodos(todos);  
}


  render() {
    // const idx={value.toString()};
    const todoRows = this.props.todos.map((todo, idx) => (
     
      <ul> 
      <li className="ToDoList " key={idx}>
      <input type="checkbox" name="done" checked={todo.done} onChange={() => this.handleUpdateToDo(todo)}/>&nbsp;&nbsp;Done&nbsp;&nbsp;
        <button onClick={() => this.handleDeleteToDo(todo)}><span role="img" aria-label="delete">🚯</span></button> &nbsp;&nbsp;
      <EditTodoButton
        {...this.props}
        refreshContent={this.refreshContent}
        handleEditToDo={this.handleEditToDo}
        todo={todo}/>&nbsp;&nbsp;
        <span className="badge">{idx + 1}</span>&nbsp;&nbsp;&nbsp;&nbsp;
        {todo.text}&nbsp;&nbsp;
        {todo.done}&nbsp;&nbsp;
      </li>
    </ul>
   
    ));
    const habitRows = this.props.habits.map((habit, idx) => (
      <ul> 
      <li className="HabitList" key={idx}>
      <input type="checkbox" name="done" checked={habit.done} onChange={() => this.handleUpdateHabit(habit)}/> &nbsp;&nbsp;Done&nbsp;&nbsp;
        <button onClick={() => this.handleDeleteHabit(habit)}><span role="img" aria-label="delete">🚯</span></button> &nbsp;&nbsp;
        <EditHabitButton
        {...this.props}
        refreshContent={this.refreshContent}
        handleEditHabit={this.handleEditHabit}
        habit={habit}/>&nbsp;&nbsp;
        <span className="badge">{idx + 1}</span>&nbsp;&nbsp;&nbsp;&nbsp;
        {habit.habit}&nbsp;&nbsp;
      </li>
        </ul>
    ));
     const goalRows = this.props.habits.map((habit, idx) => (
        <tr key={idx}>
          <td><span className="badge">{idx + 1}</span></td>
          <td>{habit.goal}</td>
        </tr>

    ));
  return(
  <div className='usersummary'>
   
    <h2> {this.props.user.name}'s Plan for Progress </h2>
    <br />
  
    <div className='user-cards'>
    <Card
    style={{ width: '35rem'}}
    className="mb-2">
    <div id='ToDoList' >
    <Card.Header 
    style={{ width: '35rem'}}>
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
    style={{ width: '35rem' }}
    className="mb-2"
  >
    <div id='HabitList'>
    <Card.Header 
    style={{ width: '35rem'}}>
        <h3 className='header-footer'>Habits</h3>
        <Link to="/newhabit" idx>Add New Goal</Link>
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
       
        <Card style={{ width: '35rem' }}
    className="mb-2">
        <div id='GoalList'>
        <Card.Header 
    style={{ width: '35rem'}}>
          <h3 className='header-footer'>Goals</h3></Card.Header>
          <br />
        <Card.Body>       

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
