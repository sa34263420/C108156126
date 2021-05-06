import React from "react";
class App2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: '',
        datasubmitted: false};
      }
      myChangeHandler = (event) => {
        this.setState({username: event.target.value});
      }
      mySubmitHandler = (event) => {
        event.preventDefault();
        this.setState({datasubmitted: true});
        console.log(this.state.username + ' 資料送出');
      }
      render() {
        let header = '';
        if (this.state.username) {
          header = <h1>Hello {this.state.username}</h1>;
        } else {
          header = '';
        }
        let message = '';
        if (this.state.datasubmitted) {
          message = <h2>{this.state.username} data submitted</h2>;
        } else {
          message = '';
        }
        return (
          <form onSubmit={this.mySubmitHandler}>
          {header}
          {message}
          <p>Enter your name:</p>
          <input type='text' onChange={this.myChangeHandler} />
          <input type='submit' value='Submit' />
          </form>
        );
      }
      }
export default App2;