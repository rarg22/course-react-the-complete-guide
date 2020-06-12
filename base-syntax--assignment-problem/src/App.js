import React, { Component } from 'react';
import './App.css';

import UserInput from './component/UserInput';
import UserOutput from './component/UserOutput';

class App extends Component {

  constructor() {
    super();
    this.state = {
      username: 'Bob'
    };
  }

  changeUsernameHandler = (username) => {
    this.setState({ username })
  }

  render() {
    return (
      <div style={{ marginTop: "20px" }}>
        <UserInput changeUsernameHandler = {this.changeUsernameHandler} ></UserInput>
        <UserOutput username={this.state.username} content="Display this new content!"></UserOutput>
        <UserOutput username={this.state.username} content="This content is awsome!"></UserOutput>
      </div>
    );
  }


  // render() {
  //   return (
  //     <div className="App">
  //       <ol>
  //         <li>Create TWO new components: UserInput and UserOutput</li>
  //         <li>UserInput should hold an input element, UserOutput two paragraphs</li>
  //         <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
  //         <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
  //         <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
  //         <li>Add a method to manipulate the state (=> an event-handler method)</li>
  //         <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
  //         <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
  //         <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
  //         <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
  //       </ol>
  //     </div>
  //   );
  // }
}

export default App;
