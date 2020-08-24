import React, { Component } from 'react';
// import { Router, Route, Link } from 'react-router-dom';
import "./UserSummaryPage.css";
import UserSummary from '../../components/UserSummary/UserSummary'
// import userService from '../../utils/userService';
// import goalService from '../../utils/goalService';
// import habitService from '../../utils/habitService';
// import todoService from '../../utils/todoService';

class UserSummaryPage extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         todos: []
    //     }
    // }
        
        render() {
            return (
                <div className="UserSummaryPage">
                    <UserSummary 
                    // props={this.props}
                    todos={this.props.todos}
                    />
                    {/* <Router>
                    <Route exact path="/user"  component={TodosList} />
                    <Route exact path="/edit/:id" component={EditTodo} />
                    <Route exact path="/create" component={CreateTodo} />
                    </Router> */}
                </div>
            );
        };
    };

export default UserSummaryPage;
