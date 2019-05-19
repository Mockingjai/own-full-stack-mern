import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Register from '../register-component/register-component';
import Login from '../login-component/login-component';
import Profile from '../profile-component/profile-component';
import TodoList from '../show-todos/show-todos';
import './App.css';

class  App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            </div>
            <Route path='/users/register' exact component={Register}/>
            <Route path='/users/login' component={Login} />
            <Route path='/users/me' component={Profile} />
            <Route path='/events/show/all' component={TodoList} />
        </Router>
    );
  }
}

export default App;
