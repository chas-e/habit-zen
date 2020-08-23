import React, { Component } from 'react';
import HabitForm from '../../components/HabitForm/HabitForm';
// import habitService from '../../utils/habitService';
import './HabitPage.css';

class HabitPage extends Component {
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


export default HabitPage;