//import logo from './logo.svg';
import './App.css';

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


function formatDate(date) {
  return date.toLocaleDateString();
}

function App(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img
          className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name} 
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="App-text">{props.text}</div>
      <div className="App-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}






export default App;
