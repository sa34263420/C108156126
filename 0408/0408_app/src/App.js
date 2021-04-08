//import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';



function App() {
  class Car extends React.Component {
    render() {
      return <h2>I am a {this.props.brand}!</h2>
    }
  }
  
  const myelement = <Car brand="Ford" />;
  
  ReactDOM.render(myelement, document.getElementById('root'));
  
}

export default App;
