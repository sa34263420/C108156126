//import logo from './logo.svg';
import './App.css';
import React from 'react';

class Clock extends React.Component{
  constructor(props) {
    super(props);
    this.state = {date: new Date() };
  }
  render(){
    return (
      <div>
        <h1>This is cless compoment!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Clock;

