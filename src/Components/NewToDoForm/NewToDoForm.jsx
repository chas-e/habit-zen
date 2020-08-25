import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NewToDoForm.css';
import todoService from '../../utils/todoService';


class ToDoForm extends Component {
    state = {
        text: '',
        done: false,
        formInvalid: true
    };

    // need to get checked to mean true

    // formRef = React.createRef();

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    isFormInvalid() {
        return !(this.state.text);
    }

    handleAddToDo = async (e) => {
        e.preventDefault();
        try {
            await todoService.create(this.state);
            this.props.history.push('/user');
        } catch (err) {
            console.log(err);
        }
    };

    render() {
        return (
            <div className="NewToDoForm">
                <header className="header-footer">New To Do List Item</header>
                <br />
                <form className="form-horizontal" onSubmit={this.handleAddToDo} >
                    <div className="form-group  Todo">
                        <div className="col-sm-12">
                            
                            <input className="form-control" name="text" placeholder="New ToDo" value={this.state.text} onChange={this.handleChange}
                                required />
                            <div><button>Edit</button></div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12 text-center">
                            {/* <NewToDoButton 
              todos={this.state.todos}/> */}
                            <button className="btn btn-default">Save</button>&nbsp;&nbsp;&nbsp;
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