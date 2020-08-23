import React, { Component } from 'react';
import ToDoForm from '../../components/ToDoForm/ToDoForm';
import './ToDoPage.css';

class ToDoPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="ToDoPage">
                <h1> Enter A New ToDo: </h1>
                <ToDoForm />
            </div>
        );
    }
}

export default ToDoPage;
