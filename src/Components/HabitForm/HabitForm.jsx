import React, { Component } from 'react';
import './HabitForm.css';
import { Link } from 'react-router-dom';
// import { format } from "date-fns";


class HabitForm extends Component {

    state = {
        goal: '',
        habit: '',
        sDate: '',
        eDate: ''
    };

    handleChange = (e) => {
        this.props.updateMessage('');
        this.setState({
          // Using ES2015 Computed Property Names
          [e.target.name]: e.target.value
        });
      }

    isFormInvalid() {
        return !(this.state.goal && this.state.habit && this.state.sDate !== this.state.eDate);
      }

    render() {
        return (
            <div className="HabitForm card">
              <header className="header-footer">New Goal</header>
              <form className="form-horizontal" //onSubmit={this.handleSubmit} 
              >
                <div className="form-group">
                  <div className="col-sm-12">
                    <input type="text" className="form-control" placeholder="Future Accomplishment" 
                    // value={this.state.goal} name="name" onChange={this.handleChange} 
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
                  <div>Habits you will do to complete your goal</div>
                  <br />
                    <input type="habit" className="form-control" placeholder="Habit" value={this.state.habit} name="habit" onChange={this.handleChange} />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-12 text-center">
                    <button className="btn btn-default" disabled={this.isFormInvalid()}>Submit Goal</button>&nbsp;&nbsp;
                    <Link to='/user'>Cancel</Link>
                  </div>
                </div>
              </form>
            </div>
          );
    }
}

export default HabitForm;