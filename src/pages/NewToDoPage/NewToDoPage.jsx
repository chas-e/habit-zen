import React, { Component } from 'react';
import ToDoForm from '../../components/ToDoForm/ToDoForm';
import './NewToDoPage.css';

class NewToDoPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="NewToDoPage">
                <h3> Enter A New ToDo </h3>
                <br />
                <ToDoForm />
            </div>
        );
    }
}

export default NewToDoPage;
