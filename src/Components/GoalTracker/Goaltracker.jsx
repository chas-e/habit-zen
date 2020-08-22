import React, { Component } from "./node_modules/react";
import styles from './GoalTracker.css';


class GoalTracker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: ''
        }
    }

    render() {
        return (
            <div className='GoalTracker'>
                <h3>GoalTracker</h3>
            </div>
        )
    }
}

export default GoalTracker;