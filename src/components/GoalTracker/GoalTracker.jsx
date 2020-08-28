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

    handleNewDay = () => {
        const newDay = new Date();
        this.setState({ today: newDay });
    }

    calculateDays = (sDate, eDate) => {
        if (!sDate || !eDate) return;
        return Math.ceil(new Date(eDate) - new Date(sDate) / goalTrackerService.dayInMS());
    }

    calculateDaysLeft = (eDate) => {
        if (!eDate) return;
        return Math.ceil(new Date(eDate) - new Date(this.state.today) / goalTrackerService.dayInMS());
    }

    componentDidMount() {
        this.handleNewDay();
        this.totalDays = this.calculateDays(this.props.habit.sDate, this.props.habit.eDate);
        console.log(this.totalDays);
        this.daysRemaining = this.calculateDaysLeft(this.props.habit.eDate);
        console.log(this.daysRemaining);
        this.now = Math.abs(1 - this.daysRemaining) / this.totalDays * 100;
        console.log(this.now);
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
