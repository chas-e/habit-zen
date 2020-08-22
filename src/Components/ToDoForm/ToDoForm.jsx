import React, { Component } from 'react';
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
            <div>
                <h3>ToDoForm</h3>
            </div >
        )
    }
}

export default ToDoForm;