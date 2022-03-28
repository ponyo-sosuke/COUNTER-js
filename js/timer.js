let count = 0;
const value = document.querySelector("#value");

document.querySelector(".decrease").addEventListener("click", decrease);
document.querySelector(".reset").addEventListener("click", reset);
document.querySelector(".increase").addEventListener("click", increase);

function decrease(){
  count--;
  value.textContent = count;
}

function reset(){
  count = 0;
  value.textContent = count;
}

function increase(){
  count++;
  value.textContent = count;
}

//buttons
import React from 'react';

export const Button = (props) => {
  return (
    <button onClick={() =>
      props.sign == "+" ? props.updateCount(1) : props.updateCount(-1)} >
      {props.sign}
    </button>

  );
}

//app
import React, { Component } from 'react';

import {Button} from './Button';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 1
    }

  }

  handleCount(value) {
    this.setState((prevState) => ({ count: prevState.count + value }));
  }

  render() {


    return (
      <div>
        Current count: {this.state.count}
        <br></br>
        <Button sign="+" count={this.state.count} updateCount={this.handleCount.bind(this)} />
        <Button sign="-" count={this.state.count} updateCount={this.handleCount.bind(this)} />
      </div>
    );
  }
}

export default App;
//