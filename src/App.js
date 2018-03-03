import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Contador from "./Contador";

class App extends Component {
  render() {
    return (
      <div>
        <Contador Contador={10} Color="red" />
        <Contador Contador={10} Color="blue" />
        <Contador Contador={10} Color="green" />
      </div>
    );
  }
}

export default App;

