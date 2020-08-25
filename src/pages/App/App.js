import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import LandingPage from '../LandingPage/LandingPage';
import NewHabitPage from '../NewHabitPage/NewHabitPage';
import NewToDoPage from '../NewToDoPage/NewToDoPage';
import UserSummaryPage from '..//UserSummaryPage/UserSummaryPage';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
// import { getAllQuotes } from '../../services/quote-api';
// import UserSummary from '../../components/UserSummary/UserSummary';
class App extends Component {
  constructor() {
    super();
    this.state = {
      // ...this.getInitialState(),
      user: userService.getUser(),
      todos: [{ todo: '', done: false }],
    };
  }

  handleChangeToDo = (e) => {
    let newToDo ={ ...this.state.newTodo };
    newToDo[e.target.name] = e.target.value;
    this.setState({ newToDo, formInvalid: true });
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

  

  // handleTodoClick = () => {

  // }


  render() {
    return (
      <div className="App">
        <header className="App-header">Welcome to HabitZen</header> <NavBar
          user={this.state.user}
          handleLogout={this.handleLogout}
        />
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
          <Route exact path='/newtodo' render={({ history }) =>
          <NewToDoPage 
          {...this.props}
          todos={this.state.todos}
          handleChangeToDo={this.handleChangeToDo}
          />
          }
          />
          <Route exact path='/newhabit' render={({ history }) =>
          <NewHabitPage 
          {...this.props}
          />
          }
          />
          <Route exact path='/user' render={({ history }) => (
          // userService.getUser() ?
          <UserSummaryPage
          {...this.props}
          todos={this.state.todos}
          handleUpdateTodos={this.handleUpdateToDos}
          // handleTodoClick={this.handleTodoClick}
          />
          // :
          // <Redirect to="/login" />
           )
          }
          />
          
        </Switch>
        <footer className='Footer'>
            <div >
              Footer
              {/* this.state<api info>.map((q, idx) =>
              <h5 className="quotes">{quotes}</h5>) */}
            </div>
            </footer>
      </div>
    );
  }
}

export default App;
