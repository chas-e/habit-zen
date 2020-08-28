import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Switch, Redirect, } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import LandingPage from '../LandingPage/LandingPage';
import NewHabitPage from '../NewHabitPage/NewHabitPage';
import NewToDoPage from '../NewToDoPage/NewToDoPage';
import UserSummaryPage from '..//UserSummaryPage/UserSummaryPage';
import userService from '../../utils/userService';
import { getRandomQ } from '../../utils/qrandom-api';
import NavBar from '../../components/NavBar/NavBar';
import GoalTracker from '../../components/GoalTracker/GoalTracker';





class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      todos: [],
      habits: [],
      quotes: [],
    };
  }

  async componentDidMount() {
    const randomQ = await getRandomQ();
    console.log(randomQ);
    this.setState({
      quotes: randomQ.contents.quote,
    });
  }

  handleSignupOrLogin = () => {
    this.setState({
      user: userService.getUser()
    });
  }

  handleLogout = () => {
    userService.logout();
    this.setState({
      user: null
    });
  }

  handleUpdateTodos = (todos) => {
    this.setState({ ...this.state.todos, todos });
  }

  handleUpdateHabits = (habits) => {
    this.setState({ ...this.state.habits, habits });
  }


  render() {
    return (

      <div className="App">
        <header className="App-header" style={{ fontSize: "6rem", color: "#ffffff" }}>HabitZen<NavBar
          user={this.state.user}
          handleLogout={this.handleLogout}
        /></header>
        <div id="App-Parent">
          <Switch>
            <Route exact path="/signup" render={({ history }) =>
              <SignupPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            }
            />
            <Route exact path="/login" render={({ history }) =>
              <LoginPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            }
            />

            <Route exact path="/" render={({ history }) =>
              <LandingPage
                user={this.state.user}
                history={history}
              />
            }
            />

            <Route exact path='/newhabit' render={({ history }) => (
              userService.getUser() ?
                <NewHabitPage
                  history={history}
                  user={this.state.user}
                />
                :
                <Redirect to="/login" />
            )}
            />

            <Route exact path='/newtodo' render={({ history }) => (
              userService.getUser() ?
                <NewToDoPage
                  history={history}
                  user={this.state.user}
                />
                :
                <Redirect to="/login" />
            )
            }
            />
            <Route exact path='/user' render={({ history }) => (
              userService.getUser() ?

                <UserSummaryPage
                  {...this.props}
                  history={history}
                  todos={this.state.todos}
                  habits={this.state.habits}
                  user={this.state.user}
                  handleUpdateTodos={this.handleUpdateTodos}
                  handleUpdateHabits={this.handleUpdateHabits}
                  GoalTracker={GoalTracker}
                />
                :
                <Redirect to="/login" />
            )
            }
            />
          </Switch>
        </div>
        <footer id="sticky-footer">
          <div>{this.state.quotes}</div>
        </footer>
      </div >
    );
  }
}

export default App;