import React, { Component } from 'react';
import Tocss from "./Tocss.css";
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom'

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: '',
      list: [],
      SignOut:true
      // msg: alert("There are no data here ") 
    }
  }
  changeUserInput(input) {
    this.setState({
      userInput: input
    });
  }
  addList(input) {
    let listArray = this.state.list;
    
    listArray.push(input);
    localStorage.setItem('listArray', JSON.stringify(listArray))
    this.setState({
      list: listArray,
    });
  }
  reset(index) {
    let newInput = this.state.list;
    newInput.pop(index);
    this.setState({
      list: newInput,
    })

  };
  removeListU(index) {
    let newInput = this.state.list;
    newInput.splice(index, 1);

    this.setState({
      list: newInput,
    })

  };

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      let listArr = this.state.list;
      listArr.push(this.state.userInput);


      this.setState({
        list: listArr,
      });
    }
  }
  handleLogOut(e){
    e.preventDefault();
    if(!this.state.SignOut)
{
    this.setState({
      SignOut:true

});
}
} 
  render() {
    if(!this.state.SignOut){
      return <Redirect to='LoginPage'/>
    }
    
    return (
   
     
      <div>
         <Link to="/Todo"/>
        <title>to-do.</title>

        <h1>..to-do..</h1>


        <input
          onChange={(e) => this.changeUserInput(e.target.value)}
          value={this.state.input}
          onKeyPress={this.handleKeyPress} />
        <button className='button' onClick={() => this.addList(this.state.userInput)}>C</button>

        <p >Please enter the name here..</p>

        <ul className= 'list'>
          {this.state.list.map((val, index) => <li className='mainlist'>{val}
            <button className='btn' onClick={() => this.removeListU(index)}>x</button>
            
          </li>)}
        </ul>
        <btn className='logout' onClick={this.handleLogOut}>Sign Out</btn>
        
      </div>
    );


  }

}



export default Todo;
