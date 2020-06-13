import React, { Component } from 'react';
import './App.css';

import Input from './component/Input/Input';
import InputValidation from './component/InputValidation/InputValidation';
import Char from './component/Char/Char';

import validator from './helper/Validator';

class App extends Component {

  constructor() {
    super();
    this.state = {
      input: "",
      isError: false,
      errorMessage: "",
      hideChars: true
    };
  }
  onInputChangeHandler = (event) => {
    const input = event.target.value.replace(" ", "");
    const validation = validator.validate(input);
    if (validation.isError) {
      this.setState({
        input: input,
        isError: validation.isError,
        hideChars: true,
        errorMessage: validation.errorMessage
      })
    } else {
      this.setState({
        input: input,
        isError: false,
        hideChars: false,
        errorMessage: ""
      })
    }
  }

  onDeleteCharHandler = (index) => {
    const input = this.state.input.split("");
    input.splice(index, 1);

    if (input.length === 0) {
      this.setState({
        hideChars: true
      })
    }
    this.setState({
      input: input.join("")
    })
  }

  renderChars() {
    return (
      <div>
        <h1 style={{ margin: "0 auto", textAlign: "center" }}>Click to Delete!</h1>
        <ul style={{ listStyle: "none" }}>
          {this.state.input.split("").map((char, index) => {
            return (
              <li key={`${char}${index}`} style={{ display: "inline-block" }}>
                <Char
                  deleteChar={this.onDeleteCharHandler}
                  key={`${index}${char}`}
                  char={char} index={index} />
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        <Input inputChange={this.onInputChangeHandler} input={this.state.input} />
        <InputValidation
          isError={this.state.isError}
          input={this.state.input}
          errorMessage={this.state.errorMessage} />
        {!this.state.hideChars ? this.renderChars() : null}
      </div>
    );
  }
}

export default App;
