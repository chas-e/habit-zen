import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { format } from "date-fns";
import habitService from '../../utils/habitService';
import './NewHabitForm.css';



class NewHabitForm extends Component {

    state = {
        goal: '',
        habit: '',
        sDate: '',
        eDate: ''
    };

    handleChange = (e) => {
        // this.props.updateMessage('');
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    // need handleSubmit function
    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await habitService.create(this.state, this.props.user);
            this.props.history.push('/user');
        } catch (err) {
            // this.props.updateMessage(err.message);
            console.log(err);
        }
    }

    isFormInvalid() {
        return !(this.state.goal && this.state.habit && this.state.sDate !== this.state.eDate);
    }

    render() {
        return (

            <div className="HabitForm card">
                <header className="header-footer">New Goal</header>
                <form className="form-horizontal" onSubmit={this.handleSubmit} >
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="text" className="form-control" placeholder="Future Accomplishment"
                                name="goal"
                                value={this.state.goal}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <br />
                    <div className="form-group">
                        <div className="col-sm-12">
                            <label htmlFor="sDate">Start Date</label>
                            <input
                                type="date"
                                name="sDate"
                                value={this.state.sDate}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <label htmlFor="eDate">End Date:</label>
                            <input
                                type="date"
                                name="eDate"
                                value={this.state.eDate}
                                min={(this.state.sDate, "YYYY-MM-DD")}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <br />
                            <div>Habits you will do to complete your goal:</div>
                            <br />
                            <input type="text"
                                name="habit"
                                className="form-control" placeholder="Habit"
                                value={this.state.habit}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12 text-center">
                            <button className="btn btn-default" disabled={this.isFormInvalid()}>Submit Habit</button>&nbsp;&nbsp;
                    <Link to='/user'>Cancel</Link>
                        </div>
                    </div>
                </form>
            </div>

        );
    }
}

export default NewHabitForm;