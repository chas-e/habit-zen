import React from 'react';
import { Link } from 'react-router-dom'
// import './LandingPage.css';

const LandingPage = (props) => {
    let landing = props.user ?
    
        
        <div className="LandingPage" style={{ height: 'cover'}}>
            <Link to="/newtodo" style={{ color: '#5c90aa'}}>Add New To Do List Item </Link>&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/newhabit" style={{ color: '#5c90aa'}}>Add New Habits</Link>
         </div>
            :
        <div>

            <Link to="/user" style={{ fontSize: '2rem', color: '#5c90aa'}}>Click here to see your user profile</Link>
            
        </div>

            return (
                <div>
                    {landing}
            <p style={{ fontSize: "8rem", color: '#5c90aa'}}> Welcome to HabitZen</p>
            
            {/* Need div elements for Goal tracking, habit 'checklist', todo 'checklist' */}
            
        </div>
    );
}

export default LandingPage;