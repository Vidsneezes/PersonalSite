import React, { Component } from 'react';
import App from '../App.js'
import './MainMenu.css';

class MainMenu extends Component {

  render() {
    return (
      <div className="MainMenu-Head">
        <ul>
            <li><a onClick={this.props.ToGames}> Games</a></li>
            <li><a>Game Jams</a></li>
            <li><a>Code Samples</a></li>
            <li><a>About Me</a></li>
        </ul>
      </div>
    );
  }
}

export default MainMenu;