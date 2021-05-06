import React from "react";
class App2 extends React.Component {
 constructor(props) {
   super(props);
   this.state = { username: '' };
 }
 myChangeHandler = (event) => {
   this.setState({username: event.target.value});
 }
 render() {
   return (
     <form>
     <h1>Hello {this.state.username}</h1>
     <p>Enter your name:</p>
     <input type='text' onChange={this.myChangeHandler} />
     </form>
   );
 }
}
export default App2;