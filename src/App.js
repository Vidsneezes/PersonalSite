import React, { Component } from 'react';
import logo from './logo.svg';
import WelcomeInterface from './WelcomeInterface';
import MainMenu from './MainMenu/MainMenu';
import EmbeddedGist from './Tools/EmbeddedGist';
import GamesPage from './GamesPage/GamesPage';
import AboutMePage from './AboutMePage/AboutMePage';

import './App.css';

const GAMES = "  Games";
const ABOUTME = "   About Me";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: GAMES
    }
    this.ToGames = this.ToGames.bind(this);
    this.ToAboutMe = this.ToAboutMe.bind(this);
    this.ToCodeSamples = this.ToCodeSamples.bind(this);
  }

  ToGames(){
    this.setState({
      currentPage: GAMES
    });
  }

  ToAboutMe(){
    this.setState({
      currentPage: ABOUTME
    });
  }

  ToCodeSamples(){
    this.setState({
      currentPage: "CodeSamples"
    });
  }

  render() {
    var page = (<div></div>);
    if(this.state.currentPage === GAMES)
      {
        page = (  <GamesPage  />);
      }else if(this.state.currentPage === ABOUTME)
      {
        page = ( <AboutMePage />);
      }

    return (
      <div className="App">
        <WelcomeInterface page={this.state.currentPage} />
        <div className="App-Column">
          <MainMenu ToGames={this.ToGames} ToAboutMe={this.ToAboutMe} ToCodeSamples={this.ToCodeSamples} />
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
