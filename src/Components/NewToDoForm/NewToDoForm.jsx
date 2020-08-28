import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NewToDoForm.css';
import todoService from '../../utils/todoService';
import Card from 'react-bootstrap/Card';


class ToDoForm extends Component {
    state = {
        text: '',
        done: '',
    };

    // need to get checked to mean true

    isFormInvalid() {
        return !(this.state.text);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
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
            <div className="NewToDo-Form">
                <Card style={{ width: '35rem'}}
                className="mb-2-todo">
                <Card-Header className='todo-header'><h3 className="header-footer">New To Do List Item</h3>
                <br />
                </Card-Header>
                <Card-Body className='todo-form'>
                <form className="form-horizontal" onSubmit={this.handleAddToDo} >
                    <div className="form-group  Todo">
                        <div className="col-sm-12">
                            <input className="form-control-todo" name="text" placeholder="New To Do List Item" value={this.state.text} onChange={this.handleChange}
                                required />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12 text-center">
                            <button className="btn btn-default" disabled={this.isFormInvalid()}>Save</button>&nbsp;&nbsp;&nbsp;
                            <Link to='/user'>Cancel</Link>
                        </div>
                    </div>
                </form>
                </Card-Body>
                </Card>
            </div>
        )
    }
}

export default ToDoForm;