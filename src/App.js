import React, { Component } from 'react';
import logo from './logo.svg';
import WelcomeInterface from './WelcomeInterface';
import MainMenu from './MainMenu/MainMenu';
import EmbeddedGist from './Tools/EmbeddedGist';
import GamesPage from './GamesPage/GamesPage';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "Games"
    }
    this.ToGames = this.ToGames.bind(this);
    this.ToGameJams = this.ToGameJams.bind(this);
    this.ToAboutMe = this.ToAboutMe.bind(this);
    this.ToCodeSamples = this.ToCodeSamples.bind(this);
    
  }

  ToGames(){
    this.setState({
      currentPage: "Games"
    });
  }

  ToGameJams(){
    this.setState({
      currentPage: "GameJams"
    });
  }

  ToAboutMe(){
    this.setState({
      currentPage: "AboutMe"
    });
  }

  ToCodeSamples(){
    this.setState({
      currentPage: "CodeSamples"
    });
  }

  render() {
    var page = (<div></div>);
    if(this.state.currentPage === "Games")
      {
        page = (  <GamesPage  />);
      }

    return (
      <div className="App">
        <WelcomeInterface />
        <div className="App-Column">
          <MainMenu ToGames={this.ToGames} ToGameJams={this.ToGameJams} ToAboutMe={this.ToAboutMe} ToCodeSamples={this.ToCodeSamples} />
        </div>
        <div className="App-Column">
          {page}
        </div>
        <div className="App-Footer">
          <p>Copyright &copy; 2017 - Oscar Morales</p>
        </div>
      </div>
    );
  }
}

export default App;
