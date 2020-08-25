import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserSummary from '../../components/UserSummary/UserSummary';
// import { Router, Route, Link } from 'react-router-dom';
import "./UserSummaryPage.css";
// import userService from '../../utils/userService';
// import goalService from '../../utils/goalService';
// import habitService from '../../utils/habitService';
// import todoService from '../../utils/todoService';

class UserSummaryPage extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // };
    render() {
        return (
            <div className="UserSummaryPage">
                <UserSummary
                    {...this.props}
                    todos={this.props.todos}
                    habits={this.props.habits}
                    handleUpdateTodos={this.props.handleUpdateTodos}
                    handleUpdateHabits={this.props.handleUpdateHabits}
                />
            </div>
        );
    }
}
// constructor(props) {
//     this.state = {
//         todos: []
//     }
// }
// <Router>
//     <Route exact path="/user"  component={TodosList} />
//     <Route exact path="/edit/:id" component={EditTodo} />
//     <Route exact path="/create" component={CreateTodo} />
//     </Router>


export default UserSummaryPage;
