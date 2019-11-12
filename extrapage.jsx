import React, { Component } from 'react';   
import { Redirect } from "react-router-dom"

class Log extends Component {
constructor(){
  super();
  this.state={
    username:'',
    password:''
  };
  
this.onChange= this.handleUserChange.bind(this);
this.onChange= this.handlePassChange.bind(this);
this.onSubmit=this.handleSubmit.bind(this);
}
  
handleUserChange(e){
  this.setState({
    username:e.target.value
  
  });
}
handlePassChange(e){
  this.setState({
    password:e.target.value
  
  });
}
handleSubmit( evt ) {  
evt.preventDefault();
console.log('hello')
}


render(){
  if (this.state.loggedIn) {
  return <Redirect to="./Todo"/>
}

return(

<div>
<h1 className='header'>To-do</h1>

  <form className='form' onSubmit={ this.handleSubmit}>
    <input
     type='text' 
     name='username'
      value={this.state.username}
       placeholder='Enter text here' 
       onChange={this.handleUserChange}
 />
 <input
  type='password' 
  name='password'
   value={this.state.password} 
   placeholder='Enter password'
   onChange={this.handlePassChange}
/>
<button className='loginbtn' >log in</button> 

<column  className='col-2'>
<em>Log in here.. </em>
  <p className='p1'>let's try to to-do here .</p>
</column>

  </form>


<footer>
    <tr className='row'>
<ul><a href='#'><li>Instagram</li></a>
<a href="#"><li>Facebook</li></a>
<a href=""><li>Google</li></a>
</ul>
<ul className='right'><a href='#'><li>About us</li></a>
<a href="#"><li>Contact</li></a>
<a href=""><li>feedback</li></a></ul>
</tr>
</footer>

</div>
);
 } 
}

export default Log;