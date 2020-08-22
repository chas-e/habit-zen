import React, { Component } from "./node_modules/react";
import style from "./ToDoForm.css";

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
            </div>
        )
    }
}

export default ToDoForm;