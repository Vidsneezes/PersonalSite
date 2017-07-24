import React, { Component } from 'react';
import './MainMenu.css';

class MainMenu extends Component {
  render() {
    return (
      <div>
        <ul>
            <li>Games</li>
            <li>Game Jams</li>
            <li>Code Samples</li>
            <li>About Me</li>
        </ul>
      </div>
    );
  }
}

export default MainMenu;