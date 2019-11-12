import React, { Component } from 'react';
import {Redirect} from "react-router-dom";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
      error: '',
      loggedIn:false,
  };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    this.setState({ error: '' });
  }

  handleSubmit(evt) {
    evt.preventDefault();
   if(this.state.username == "user1" && this.state.password == 1234){
      this.setState({
        loggedIn:true
      });
   } 
   if(this.state.username == "user2" && this.state.password == 1234){
    this.setState({
      loggedIn:true
    });
 } 
 if(this.state.username == "user3" && this.state.password == 1234){
  this.setState({
    loggedIn:true
  });
} 

  } 
    
  
   
  handleUserChange(evt) {
    this.setState({
      username: evt.target.value,
    
    });
  }
  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }

  render() {
    // NOTE: I use data-attributes for easier E2E testing
    // but you don't need to target those (any css-selector will work)
    if (this.state.loggedIn) {
      return <Redirect push to='/Todo'/>
    }
   


    return (
      <div className="Login">
        <form className="form" onSubmit={this.handleSubmit}>
        <h1>Log in </h1>  
  <tr>
 <input type="text" data-test="username" placeholder="Enter user ID" value={this.state.username} onChange={this.handleUserChange} /> </tr> 
<tr><input type="password" data-test="password" placeholder='Enter password' value={this.state.password} onChange={this.handlePassChange}/></tr>     
<tr><input type="submit" value="Log In" data-test="submit" className='button'/></tr>

        </form>
      </div>
    );
  }
}

export default LoginPage;
