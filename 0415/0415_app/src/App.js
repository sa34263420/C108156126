//import logo from './logo.svg';
import './App.css';
import React from 'react';


class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  render() {
    return <h2>I am a {this.state.color} Car!</h2>;
  }
}



export default Car;
