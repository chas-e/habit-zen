import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import UserSummary from '../../components/UserSummary/UserSummary';
// import { Router, Route, Link } from 'react-router-dom';
import "./UserSummaryPage.css";


class UserSummaryPage extends Component {

    // handleToDoDone = (e) => {
    //     let done = { ...this.props.todo.done };
    //     done[e.target.name] = e.target.value;
    //     this.setState({ done });
    //   }
 
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

// <Router>
//     <Route exact path="/user"  component={TodosList} />
//     <Route exact path="/edit/:id" component={EditTodo} />
//     <Route exact path="/create" component={CreateTodo} />
//     </Router>


export default UserSummaryPage;
