import React, { Component } from 'react';
import './GoalTracker.css';
import goalTrackerService from '../../utils/goalTrackerService'


class GoalTracker extends Component {

    render() {
        return (
            <div className='GoalTracker'>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        );
    }
}

// track the start day, current day, and end day - that lets you know percentag of time elapsed and time left

// need current progress piece of state - update as it changes, then re-render for the user

// also need when user marks a habit done to be in state


export default GoalTracker;