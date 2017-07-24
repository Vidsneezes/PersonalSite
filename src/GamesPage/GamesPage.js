import React, { Component } from 'react';
import GameWidget from './GameWidget/GameWidget.js';
import JimAddict from '../Assets/GamesPage/JimAddictThumb.png';
import ChristmasDashing from '../Assets/GamesPage/ChristmasDashingThumb.png';
import Zultra from '../Assets/GamesPage/RegularZultra.png'
import './GamesPage.css';

class GamesPage extends Component {

  render() {
    return (
      <div className="GamePage-Head">
       <GameWidget 
        image = {JimAddict}
        title="Hle" 
        description="this is goinr to be a long line that wyh i need to test it" 
        role="kf" 
        itch="https://www.w3schools.com/css/tryit.asp?filename=trycss_inline-block" 
        kong="https://www.w3schools.com/css/tryit.asp?filename=trycss_inline-block"
        google="https://www.w3schools.com/css/tryit.asp?filename=trycss_inline-block"/>

        <GameWidget 
        image = {ChristmasDashing}
        title="Hle" 
        description="this is goinr to be a long line that wyh i need to test it" 
        role="kf" 
        itch="https://www.w3schools.com/css/tryit.asp?filename=trycss_inline-block" 
        kong="https://www.w3schools.com/css/tryit.asp?filename=trycss_inline-block"
        google="https://www.w3schools.com/css/tryit.asp?filename=trycss_inline-block"/>

        <GameWidget 
        image = {Zultra}
        title="Hle" 
        description="this is goinr to be a long line that wyh i need to test it" 
        role="kf" 
        itch="https://www.w3schools.com/css/tryit.asp?filename=trycss_inline-block" 
        kong="https://www.w3schools.com/css/tryit.asp?filename=trycss_inline-block"
        google="https://www.w3schools.com/css/tryit.asp?filename=trycss_inline-block"/>
      </div>
      
    );
  }
}

export default GamesPage;