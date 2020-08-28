import React from 'react';
import { Link } from 'react-router-dom';

import './LandingPage.css';

const LandingPage = (props) => {
    let landing = props.user ?
        <div className="LandingPage" >
            <Link to="/newtodo" style={{ color: '#5c90aa', fontSize: '2rem' }}>Add New To Do List Item </Link>&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/newhabit" style={{ color: '#5c90aa', fontSize: '2rem' }}>Add New Habits</Link>
            <br />
            <br />
            <Link to="/user" className="LandLink" style={{ fontSize: '3rem', color: '#5c90aa' }}>Click here to see your user profile</Link>
        </div>
        :
        <div>
        </div>

    return (
        <div>
            {landing}
            <p id="title" style={{ fontSize: "8rem", color: '#5c90aa' }}> Welcome to HabitZen</p>

        </div>
    );
}

export default LandingPage;