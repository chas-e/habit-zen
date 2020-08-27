import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
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
import goalTrackerService from '../../utils/goalTrackerService';

class App extends Component {
  constructor() {
    super();
    this.state = {
      // ...this.getInitialState(),
      user: userService.getUser(),
      todos: [{ text: '', done: '', date: '' }],
      habits: [{
        goal: '',
        status: null,
        habit: '',
        done: false,
        sDate: null,
        eDate: null
      }],
      quotes: [],
      today: "",
    };
  }

  async componentDidMount() {
    const randomQ = await getRandomQ();
    console.log(randomQ);
    this.setState({
      quotes: randomQ.contents.quote,
    });
  }

  // getInitialState() {
  //   return {
  //   };
  // }

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

  handleNewDay = () => {
    const newDay = new Date().toLocaleDateString();
    this.setState({ ...this.state.today, newDay });
  }

  calculateDays = (sDate, eDate) => {
    Math.ceil(this.state.eDate - this.state.sDate / goalTrackerService.dayinMS);
  }

  calculateDaysLeft = (day, eDay) => {
    Math.ceil(this.state.eDate - this.state.today / goalTrackerService.dayinMS);
  }

  calculateProgress = () => {
    const daysLeft = this.calculateDaysLeft();
    const daysTotal = this.calculateDays();
    const progressRate = Math.abs(1 - daysLeft) / daysTotal * 100;
    return progressRate;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">Welcome to HabitZen</header> <NavBar
          user={this.state.user}
          handleLogout={this.handleLogout}
        />
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
                history={history}
              />
            }
            />

            <Route exact path='/newhabit' render={({ history }) => (
              userService.getUser() ?
                <NewHabitPage
                  history={history}
                />
                :
                <Redirect to="/login" />
            )}
            />

            <Route exact path='/newtodo' render={({ history }) =>
              <NewToDoPage
                history={history}
              />
            }
            />
            <Route exact path='/user' render={({ history }) => (
              userService.getUser() ?
                <UserSummaryPage
                  {...this.props}
                  history={history}
                  todos={this.state.todos}
                  habits={this.state.habits}
                  handleUpdateTodos={this.handleUpdateTodos}
                  handleUpdateHabits={this.handleUpdateHabits}
                  GoalTracker={GoalTracker}
                  today={this.state.today}
                  handleNewDay={this.handleNewDay}
                  calculateDays={this.calculateDays}
                  calculateDaysLeft={this.calculateDaysLeft}
                  calculateProgress={this.calculateProgress}
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
