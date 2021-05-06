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
    let header = '';
    if(this.state.username){
        header=<h1>Hello {this.state.username}</h1>
    }else{
        header='';
    }
   return (
     <form>
     {header}
     <p>Enter your name:</p>
     <input type='text' onChange={this.myChangeHandler} />
     </form>
   );
 }
}
export default App2;