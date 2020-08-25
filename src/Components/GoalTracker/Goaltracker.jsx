import React, { Component } from 'react';
import './GoalTracker.css';


class GoalTracker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            goal: '',
            progress: null
        }
    }

    render() {
        return (
            <div className='GoalTracker'>
                <h3>GoalTracker</h3>
            </div>
        );
    }
}

export default GoalTracker;