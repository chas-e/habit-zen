import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';
import userService from '../../utils/userService';
import Card from 'react-bootstrap/Card';


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
                <Card style={{ width: '35rem' }}
                    className="mb-25">
                <Card-Header >
                    <h3 className="header-footer">Log In</h3>
                    </Card-Header>
                <Card-Body>
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
                    <Link className="loginLink" to='/user'>Cancel</Link>
                        </div>
                    </div>
                </form>
                </Card-Body>
                </Card>
            </div>
        );
    }
}

export default LoginPage;