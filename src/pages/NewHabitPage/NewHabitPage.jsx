import React, { Component } from 'react';
import HabitForm from '../../components/HabitForm/HabitForm';
import './NewHabitPage.css';

class NewHabitPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
        render() {
            return (
                <div className="NewHabitPage">
                    <HabitForm />
                </div>
            );
        }
    }


export default NewHabitPage;