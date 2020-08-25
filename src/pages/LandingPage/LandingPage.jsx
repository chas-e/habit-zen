import React from 'react';
import { Link } from 'react-router-dom'
// import './LandingPage.css';

const LandingPage = (props) => {
    return (
        <div className="LandingPage">
            <h1>This is Our Landing Page!</h1>

            {/* Need div elements for Goal tracking, habit 'checklist', todo 'checklist' */}
            <Link to="/newtodo">Add New To Do</Link>
            <Link to="/newhabit">Add New Habits</Link>
        </div>
    );
}

export default LandingPage;