import React, { Component } from 'react';
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

class App extends Component {
  constructor() {
    super();
    this.state = {
      // ...this.getInitialState(),
      user: userService.getUser(),
      todos: [{ text: '', done: '' , date: ''}],
      habits: [{ 
        goal: '', 
        habit: '',
        sDate: '',
        eDate: ''}],
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

  handleUpdateTodos = ( todos ) => {
    this.setState({ todos });
  }

  handleUpdateHabits = ( habits ) => {
    this.setState({ habits });
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
              // userService.getUser() ?
              <UserSummaryPage
                {...this.props}
                todos={this.state.todos}
                habits={this.state.habits}
                handleUpdateTodos={this.handleUpdateTodos}
                handleUpdateHabits={this.handleUpdateHabits}
                history={history}
              // handleTodoClick={this.handleTodoClick}
              />
              // :
              // <Redirect to="/login" />
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
