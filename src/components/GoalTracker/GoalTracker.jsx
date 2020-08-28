import React, { Component } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import goalTrackerService from '../../utils/goalTrackerService'


class GoalTracker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            today: new Date()
        };
    }

    // this sets a new date object to the current day in state
    handleNewDay = () => {
        const newDay = new Date();
        this.setState({ today: newDay });
    }

    // this calculates total days based on a goals start and end dates
    calculateDays = (sDate, eDate) => {
        if (!sDate || !eDate) return;
        return Math.ceil(new Date(eDate) - new Date(sDate) / goalTrackerService.dayInMS());
    }

    // this calculates the remaining days based on today and the goals end date
    calculateDaysLeft = (eDate) => {
        if (!eDate) return;
        return Math.ceil(new Date(eDate) - new Date(this.state.today) / goalTrackerService.dayInMS());
    }

    // when the goaltracker mounts, the day updates and calculations run to determine the rate of time remaining and progress
    componentDidMount() {
        this.handleNewDay();
        this.totalDays = this.calculateDays(this.props.habit.sDate, this.props.habit.eDate);
        this.daysRemaining = this.calculateDaysLeft(this.props.habit.eDate);
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
