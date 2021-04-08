import React from 'react';

class App extends React.Component {
   render() {
    const headername = {name:"Ford",model:"Mustang"};
      return (
         <div>
            <Header hname={headername}/>
            <Content/>
            <h2>I am a {this.props.color} Car!</h2>
         </div>
      );
   }
}
class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Header</h1>
         </div>
      );
   }
}
class Content extends React.Component {
   render() {
      return (
         <div>
            <h2>Content</h2>
            <p>The content text!!!</p>
         </div>
      );
   }
}
export default App;