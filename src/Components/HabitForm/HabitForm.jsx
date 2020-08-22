import React, { Component } from 'react';
import './HabitForm.css';

class HabitForm extends Component {

    state = {
        Goal: '',
        Habit: '',
        StartDate: '',
        EndDate: ''
    }

    render() {
        return (
            <div>
                <h3>HabitForm</h3>
            </div>
        )
    }
}

export default HabitForm;