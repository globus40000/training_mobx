import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./Counter";
import { observable } from 'mobx';

let counterState = observable({
  count: 0
});
counterState.increment = function() {
  this.count += 1;
};
counterState.decrement = function() {
  this.count -= 1;
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter store={counterState}/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
