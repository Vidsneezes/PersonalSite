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
        image = {ChristmasDashing}
        title="Christmas Dashing" 
        description="Christmas Dashing is a sliding Puzzle game with over 50 unique levels embedding new mechanics into the slide puzzle game genre." 
        role="programmer, artist, designer" 
        play="https://vidsneezes.itch.io/christmas-dashing"
        b_color='#e83d12' />

       <GameWidget 
        image = {JimAddict}
        title="Jim Addict" 
        description="A coffee fueled super hero tries to save the kingdom! Save the Kingdom by unlocking the true powers of the coffee bean net!" 
        role="programmer, artist, designer" 
        play="https://vidsneezes.itch.io/jim-addict"
        b_color='#e86011'/>

        <GameWidget 
        image = {Zultra}
        title="Zultra U" 
        description="You will be tested! A short platformer, our hero tries to pass his Hunter Exam!" 
        role="programmer, artist, designer, composer" 
        play="https://vidsneezes.itch.io/zultrau"
        b_color='#e87c11'/>
      </div>
      
    );
  }
}

export default GamesPage;