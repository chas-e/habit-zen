import React, { Component } from 'react';
import NewHabitForm from '../../components/NewHabitForm/NewHabitForm';
// import habitService from '../../utils/habitService';
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
                <NewHabitForm
                    {...this.props}
                />
            </div>
        );
    }
}


export default NewHabitPage;