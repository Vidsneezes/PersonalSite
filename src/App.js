import React, { Component } from 'react';
import logo from './logo.svg';
import WelcomeInterface from './WelcomeInterface';
import MainMenu from './MainMenu/MainMenu';
import EmbeddedGist from './Tools/EmbeddedGist';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WelcomeInterface />
        <MainMenu />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <EmbeddedGist gist = "Shininglow/56ee6effa33d711d46b651fc0dd09366" />
      </div>
    );
  }
}

export default App;
