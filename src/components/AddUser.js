import React, { Component } from 'react';
import '../App.css';

class AddUser extends Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkInputs = this.checkInputs.bind(this);
    this.checkButton = this.checkButton.bind(this);
  }
  state = {
    user: [],
    isInputsEmpty: [true, true, true],
    isThisButtonDisable: true,
  }

  checkInputs(event, index) {
    event.preventDefault();

 

    let isInputsEmptyCopy = { ...this.state.isInputsEmpty };
    
    if (event.target.value !== '' && this.state.isInputsEmpty[index] === true) {
      isInputsEmptyCopy[index] = false;  
   
      this.setState((prevState) => ({
        isInputsEmpty: isInputsEmptyCopy
      }))

      console.log(isInputsEmptyCopy)

      if (isInputsEmptyCopy[0] === false && isInputsEmptyCopy[1] === false && isInputsEmptyCopy[2] === false) {
        console.log("Button would be enable")
        this.setState((prevState) => ({
          isThisButtonDisable: !prevState
        }))
      }
    } else if(event.target.value === '') {
      isInputsEmptyCopy[index] = true;  

      this.setState((prevState) => ({
        isInputsEmpty: isInputsEmptyCopy
      }))

      if (this.state.isThisButtonDisable !== true) {

        this.setState((prevState) => ({
          isThisButtonDisable: true
        }))

        this.forceUpdate();
        console.log("button should false")
       
      }
    }
  
    
  }

  checkButton() {
    console.log(this.state.isInputsEmpty[0])
  }

  handleSubmit(event) {
    event.preventDefault();
    const firstName = document.getElementById('firstnameinput').value;
    const lastName = document.getElementById('lastnameinput').value;
    const userName = document.getElementById('usernameinput').value;
    const gamesPlayed = 0;
    console.log(lastName)
    const user = {
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      gamesPlayed: gamesPlayed,
    }
    this.props.getUsers(event, user)
  }

  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <legend>Add User</legend>
        <label htmlFor="firstname">Enter firstname</label>
        <input id="firstnameinput" placeholder="first name" onChange={(event) => this.checkInputs(event, 0)} />
        <label htmlFor="lastname">Enter your lastname</label>
        <input id="lastnameinput" placeholder="last name" onChange={(event) => this.checkInputs(event, 1)} />
        <label htmlFor="username">Enter username</label>
        <input id="usernameinput" placeholder="username" onChange={(event) => this.checkInputs(event, 2)} />
        <button disabled={this.state.isThisButtonDisable}>Add User</button> 
      </form>
    )
  }
}


export default AddUser