import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import { getRandomQ  } from '../../utils/qrandom-api';
import Footer from '../Footer/Footer'

class App extends Component {
  constructor() {
    super();
    this.state = {
      // ...this.getInitialState(),
      user: userService.getUser(),
      quote: "",
    };
  }

 async componentDidMount () {
  const randomQ = await getRandomQ();
  console.log(randomQ);
  this.setState({
    quote: randomQ.quotes.quote,
});
  }

  // getInitialState() {
  //   return {

  //   };
  // }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  render() {
    return (
      <div className="App" >
        <header className="App-header">Welcome to HabitZen</header>
        <Switch>
          <Route exact path="/signup" render={({ history }) =>
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          } />
          <Route exact path="/login" render={({ history }) =>
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          } />
        </Switch>
        <Footer  />
      </div>
    );
  }
}

export default App;
