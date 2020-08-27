import React, { Component } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './GoalTracker.css';
import goalTrackerService from '../../utils/goalTrackerService'

const now = 75;

class GoalTracker extends Component {


    componentDidMount() {
        this.props.handleNewDay();
        this.props.calculateDays();
        this.props.calculateDaysLeft();
        this.props.calculateProgress();
    }

    render() {
        return (
            <div className='GoalTracker'>
                <ProgressBar now={now} label={`${now}%`}
                    style={{
                        width: "15vmin",
                        height: "3vmin",
                        lineHeight: "10px",
                    }}
                />
            </div>
        );
    }
}



export default GoalTracker;

// const now = 60;

// const progressInstance = <ProgressBar now={now} label={`${now}%`} />;

// render(progressInstance);


// track the start day, current day, and end day - that lets you know percentag of time elapsed and time left

// need current progress piece of state - update as it changes, then re-render for the user

// also need when user marks a habit done to be in state
// handleNewDay={this.handleNewDay}
//           calculateDays={this.calculateDays}
//           calculateDaysLeft={this.calculateDaysLeft}
//           calculateProgress={this.calculateProgress}