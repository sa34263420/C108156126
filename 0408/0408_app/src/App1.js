//import logo from './logo.svg';
//import { render } from '@testing-library/react';
import './App.css';
import React from 'react';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


class formatDate extends React.Component{
  render(){
  return this.props.date.toLocaleDateString();
  }
}

class App extends React.Component{
  render(){
    return (
      <div className="Comment">
        <div className="UserInfo">
          <img
            className="Avatar"
            src={this.props.author.avatarUrl}
            alt={this.props.author.name} 
          />
          <div className="UserInfo-name">
            {this.props.author.name}
          </div>
        </div>
        <div className="App-text">{this.props.text}</div>
        <div className="App-date"><formatDate date={this.props.date} /></div>
      </div>
    ); 
  }
}





export default App;
