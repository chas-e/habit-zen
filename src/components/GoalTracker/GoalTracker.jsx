
import React, { Component } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './GoalTracker.css';
import goalTrackerService from '../../utils/goalTrackerService'


class GoalTracker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            today: new Date()
        };
    }
    // this sets a new date object for the current day in state
    handleNewDay = () => {
        const newDay = new Date();
        this.setState({ today: newDay });
    }

    // this calculates the days between the start and end dates entered by the user
    calculateDays = (sDate, eDate) => {
        if (!sDate || !eDate) return;
        return Math.ceil(new Date(eDate) - new Date(sDate) / goalTrackerService.dayInMS());
    }

    // this calculates days left based on today and the goal end date
    calculateDaysLeft = (eDate) => {
        if (!eDate) return;
        return Math.ceil(new Date(eDate) - new Date(this.state.today) / goalTrackerService.dayInMS());
    }

    componentDidMount() {
        this.handleNewDay();
        this.totalDays = this.calculateDays(this.props.habit.sDate, this.props.habit.eDate);
        this.daysRemaining = this.calculateDaysLeft(this.props.habit.eDate);
        // this sets the rate for the progress tracker UI based on today and days left
        this.now = Math.abs(1 - this.daysRemaining) / this.totalDays * 100;
    }

    render() {
        return (
            <div className='GoalTracker'>
                <ProgressBar now={Math.floor(this.now)} label={`${Math.floor(this.now)}%`}
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