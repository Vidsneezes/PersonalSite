import React, { Component } from 'react';
import App from '../App.js'
import './MainMenu.css';

class MainMenu extends Component {
  render() {
    return (
      <div className="MainMenu-Head">
        <ul>
            <li onClick={this.props.ToGames}><a > Games</a></li>
            <li><a>Code Samples</a></li>
            <li onClick={this.props.ToAboutMe}><a >About Me</a></li>
        </ul>
      </div>
    );
  }
}

export default MainMenu;