import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { format } from "date-fns";
import habitService from '../../utils/habitService';
import './HabitForm.css';



class HabitForm extends Component {

    state = {
        goal: '',
        habit: '',
        sDate: '',
        eDate: ''
        // do we need to attach a user here? or can we do that?
    };

    handleChange = (e) => {
        this.props.updateMessage('');
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    // need handleSubmit function
    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await habitService.create(this.state);
            this.props.history.push('/');
        } catch (err) {
            this.props.updateMessage(err.message);
        }
    }

    isFormInvalid() {
        return !(this.state.goal && this.state.habit && this.state.sDate !== this.state.eDate); // also need to make sure eDate is after sDate
    }

    render() {
        return (
            <div className="HabitForm card">
                <header className="header-footer">New Goal</header>
                <form className="form-horizontal" onSubmit={this.handleSubmit} >
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="text" className="form-control" placeholder="Future Accomplishment"
                                value={this.state.goal}
                                name="name"
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
                                onChange={e => this.setState({ sDate: e.target.value })}
                            />                  </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <label htmlFor="sDate">End Date:</label>
                            <input
                                type="date"
                                min={(this.state.sDate, "YYYY-MM-DD")}
                                onChange={e => this.setState({ eDate: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <br />
                            <div>Habits you will do to complete your goal:</div>
                            <br />
                            <input type="habit" className="form-control" placeholder="Habit"
                                value={this.state.habit}
                                name="habit"
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12 text-center">
                            <button className="btn btn-default" disabled={this.isFormInvalid()}>Submit Goal</button>&nbsp;&nbsp;
                    <Link to='/'>Cancel</Link>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default HabitForm;