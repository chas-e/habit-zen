import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NewToDoForm.css';
import todoService from '../../utils/todoService';


class ToDoForm extends Component {
    state = {
      todos: [{ todo: "", done: false }],
        newToDo: {
            todo: '',
            done: false
        },
        formInvalid: true
    };

    // formRef = React.createRef();

    handleChange = (e) => {
      this.props.updateToDo('');
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  
   
    isFormInvalid() {
      return !(this.props.newToDo.todo);
    }

    addToDo = async (e) => {
      e.preventDefault();
      try {
        await todoService.index(this.state);
        // Successfully signed up - show GamePage
        // programattically reroute the user
        this.props.create();
        this.props.history.push('/user');
      } catch (err) {
        // Invalid user data (probably duplicate email)
        this.props.updateToDo(err.message);
      }
    };

    render() {
        return (
        <div className="ToDoForm">
        <header className="header-footer">New To Do List Item</header>
        <br />
        <form className="form-horizontal"  onSubmit={this.addToDo} >
          <div className="form-group  Todo">
            <div className="col-sm-12">
              <input className="form-control" name="todo" placeholder="New Item" value={this.props.newToDo} onChange={this.handleChange} 
              required/>
              <div><button>Edit</button></div>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              {/* <NewToDoButton 
              todos={this.state.todos}/> */}
              <button  className="btn btn-default">Save</button>&nbsp;&nbsp;&nbsp;
              {/* disabled={this.isFormInvalid()} */}
              <Link to='/user'>Cancel</Link>
            </div>
            </div>
        </form>
        
        </div>
        )
    }
}

export default ToDoForm;