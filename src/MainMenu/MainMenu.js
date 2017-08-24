import React, { Component } from 'react';
import App from '../App.js'
import './MainMenu.css';

class MainMenu extends Component {
  render() {
    return (
      <div className="MainMenu-Head">
        <ul>
            <li onClick={this.props.ToGames}><a > Games</a></li>
            <li><a className ="MainMenuLink" href="https://github.com/Vidsneezes">Github</a></li>
            <li><a className ="MainMenuLink" href="https://www.linkedin.com/in/oscar-morales-6b0764133/">LinkedIn</a></li>
            <li><a className ="MainMenuLink" href="https://docs.google.com/document/d/1uPSmzOz4jA73_HTcmgJaVdOuRsPgXcVz1nQS16vl-Es/edit?usp=sharing">Resume</a></li>
            <li><a className ="MainMenuLink" href="https://twitter.com/Moraleszez">Tweet at me</a></li>
            <li onClick={this.props.ToAboutMe}><a >About Me</a></li>
        </ul>
      </div>
    );
  }
}

export default MainMenu;