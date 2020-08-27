import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import UserSummary from '../../components/UserSummary/UserSummary';
// import { Router, Route, Link } from 'react-router-dom';
import "./UserSummaryPage.css";


class UserSummaryPage extends Component {

    render() {
        return (
            <div className="UserSummaryPage">
                <UserSummary
                    {...this.props}
                    todos={this.props.todos}
                    habits={this.props.habits}
                    handleUpdateTodos={this.props.handleUpdateTodos}
                    handleUpdateHabits={this.props.handleUpdateHabits}
                    handleNewDay={this.props.handleNewDay}
                    calculateDays={this.props.calculateDays}
                    calculateDaysLeft={this.props.calculateDaysLeft}
                    calculateProgress={this.props.calculateProgress}
                />
            </div>
        );
    }
}


export default UserSummaryPage;
