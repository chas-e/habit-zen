import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ToDoForm.css';

class ToDoForm extends Component {
    state = {
        Goal: '',
        Habit: '',
        StartDate: '',
        EndDate: ''
    }

    render() {
        return (
            <div className="ToDoForm">
                <header className="header-footer">New To Do List Item</header>
                <form className="form-horizontal" onSubmit={this.handleToDoSubmit} >
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="ToDo" className="form-control" //placeholder="Email" value={this.state.toDO} name="email" onChange={this.handleChange} 
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12 text-center">
                            <button className="btn btn-default">Submit</button>&nbsp;&nbsp;&nbsp;
              <Link to='/'>Cancel</Link>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default ToDoForm;