import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./UserSummaryPage.css";

class UserSummaryPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        render() {
            return (
                <div className="UserSummaryPage">
                    <h1>User Summary:</h1>
                </div>
            );
        }
    }
}

export default UserSummaryPage;
