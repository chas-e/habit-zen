import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';
import userService from '../../utils/userService';

class LoginPage extends Component {

    state = {
        email: '',
        pw: ''
    };

    handleChange = (e) => {
        // TODO: implement in an elegant way
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    // copied over from the SignupForm
    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await userService.login(this.state);
            // Successfully signed up - show GamePage
            this.props.handleSignupOrLogin();
            this.props.history.push('/');
        } catch (err) {
            // Invalid user data - as a note use toasts or modals in our apps, not alerts...
            alert("Invalid login credentials. Please try again.");
        }
    }

    render() {
        return (
            <div className="LoginPage">
                <header className="header-footer">Log In</header>
                <form className="form-horizontal" onSubmit={this.handleSubmit} >
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="email" className="form-control" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="password" className="form-control" placeholder="Password" value={this.state.pw} name="pw" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12 text-center">
                            <button className="btn btn-default">Log In</button>&nbsp;&nbsp;&nbsp;
              <Link to='/user'>Cancel</Link>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginPage;