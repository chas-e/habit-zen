import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { format } from "date-fns";
import habitService from '../../utils/habitService';
import './NewHabitForm.css';
import Card from 'react-bootstrap/Card';


class NewHabitForm extends Component {

    state = {
        goal: '',
        habit: '',
        sDate: '',
        eDate: ''
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await habitService.create(this.state, this.props.user);
            this.props.history.push('/user');
        } catch (err) {
            console.log(err);
        }
    }

    isFormInvalid() {
        return !(this.state.goal && this.state.habit && this.state.sDate !== this.state.eDate);
    }

    render() {
        return (


            <div className="HabitForm">
                <Card style={{ width: '35rem' }}
                    className="mb-2">
                    <Card-Header>
                        <h3 className="header-footer">New Goal</h3></Card-Header>
                    <Card-Body><form className="form-horizontal" onSubmit={this.handleSubmit} >

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
                                <div>What you will do daily to complete your goal:</div>
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
                    <Link className="habitLink" to='/user'>Cancel</Link>
                            </div>
                        </div>
                    </form>
                    </Card-Body>
                </Card>
            </div>

        );
    }
}

export default NewHabitForm;