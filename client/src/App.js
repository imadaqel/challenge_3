import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      pass:''
      
    };
    
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    let email = this.state.email;
    let pass=this.state.pass;
    
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
      
      <p>Enter your name:</p>
      <input
        type='text'
        name='name'
        onChange={this.myChangeHandler}
      />
      <p>Enter your email:</p>
      <input
        type='text'
        name='email'
        onChange={this.myChangeHandler}
      />
      <p>Enter your pass:</p>
      <input
        type='text'
        name='pass'
        onChange={this.myChangeHandler}
      />
      <br/>
      <br/>
      <input type='submit' />
      </form>
    );
  }
}

export default App;
