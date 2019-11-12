import React, { Component } from 'react';
import {BrowserRouter as Router, Link,Switch, Route, Redirect} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Todo from './todoApp/todpApp';
import LoginPage from './todoApp/log';
import Log from './todoApp/extrapage';

class App extends Component {
  

  render() { 
    return (
    <div>
    <Router>
    <Switch>
    <Route  path='/' component={ LoginPage }/>
    <Route  from='/log' to='/Todo' excat component={ Todo }/>


    </Switch>


    </Router>
    </div>
    
    );
  }
}
 
export default App;
