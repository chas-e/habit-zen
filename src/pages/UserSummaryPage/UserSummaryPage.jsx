import React, { Component } from 'react';
import UserSummary from '../../components/UserSummary/UserSummary';


class UserSummaryPage extends Component {
        
  
 
    render() {
        return (
            <div className="UserSummaryPage">
                <UserSummary
                    {...this.props}
                    user={this.props.user}
                    todos={this.props.todos}
                    habits={this.props.habits}
                    handleUpdateTodos={this.props.handleUpdateTodos}
                    handleUpdateHabits={this.props.handleUpdateHabits}
                />
            </div>
        );
    }
}




export default UserSummaryPage;
