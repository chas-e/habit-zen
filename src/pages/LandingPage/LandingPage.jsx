import React from 'react';
import { Link } from 'react-router-dom'

const LandingPage = (props) => {
    return (
        <div className="LandingPage">
            <h1>Welcome to Habit-Zen!</h1>

            {props.user && <Link to="/newtodo" style={{
                fontSize: "3vmin",
                fontWeight: "bold"
            }}
            >Add New To Do</Link>}
            &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            {props.user && <Link to="/newhabit" style={{
                fontSize: "3vmin",
                fontWeight: "bold"
            }}
            >Add New Habit</Link>}
        </div>
    );
}

export default LandingPage;