import React, { Component } from 'react';
import GameWidget from './GameWidget/GameWidget.js';
import JimAddict from '../Assets/GamesPage/JimAddictThumb.png';
import ChristmasDashing from '../Assets/GamesPage/ChristmasDashingThumb.png';
import Zultra from '../Assets/GamesPage/RegularZultra.png';
import TakeMeAway from '../Assets/GamesPage/TakeMeAway.gif';
import BurgerForMe from '../Assets/GamesPage/BurgerForMe.png';
import LostAtBirth from '../Assets/GamesPage/LostAtBirth.gif';
import ParaCaffiene from '../Assets/GamesPage/ParaCaffiene.png';
import UltraZultra from '../Assets/GamesPage/UltraZultra.png';
import './GamesPage.css';

class GamesPage extends Component {

  render() {
    return (
      <div className="GamePage-Head">
        <GameWidget 
        image = {UltraZultra}
        title="Project Ultra Zultra" 
        description="The Evil Peak Master is at it again! Punch his lights out before he turns Errrbody into pigeons! **GAME IS IN DEVELOPMENT**" 
        role="programmer, artist, designer, composer" 
        play="http://ultrazultra.herokuapp.com/"
        b_color='#8e11e8' />

        <GameWidget 
        image = {ChristmasDashing}
        title="Christmas Dashing" 
        description="Christmas Dashing is a sliding Puzzle game with over 50 unique levels embedding new mechanics into the slide puzzle game genre." 
        role="programmer, artist, designer" 
        play="https://play.google.com/store/apps/details?id=com.vidsneeze.christmasdashing"
        b_color='#e83d12' />

       <GameWidget 
        image = {JimAddict}
        title="Jim Addict" 
        description="A coffee fueled super hero tries to save the kingdom! Save the Kingdom by unlocking the true powers of the coffee bean net!" 
        role="programmer, artist, designer" 
        play="https://vidsneezes.itch.io/jim-addict"
        b_color='#e86011'/>

      <GameWidget 
        image = {TakeMeAway}
        title="Take Me Away" 
        description="Become a crazy in Take Me Away. A short fps i made for halloween. You must use your axe to defeat the eyeballs! They are staring! They are staring! Stop staring!" 
        role="programmer, artist, designer, composer" 
        play="https://vidsneezes.itch.io/takemeaway"
        b_color='#e87c11'/>

      <GameWidget 
        image = {BurgerForMe}
        title="Burger For Me" 
        description="Made with SQRbox Studios for A Gamejolt Game Jam . Flip burgers to keep your illegal immigrant family alive! Will you succeed or end up deported ?" 
        role="programmer, designer" 
        play="https://vidsneezes.itch.io/burger-for-me"
        b_color='#e87c11'/>

        <GameWidget 
        image = {Zultra}
        title="Zultra U" 
        description="You will be tested! A short platformer, our hero tries to pass his Hunter Exam!" 
        role="programmer, artist, designer, composer" 
        play="https://vidsneezes.itch.io/zultrau"
        b_color='#e87c11'/>

       <GameWidget 
        image = {LostAtBirth}
        title="Lost at Birth" 
        description="Made for independence day game jam. What is the place? How did you get here? Use the magic wand to find your answers!" 
        role="programmer, artist, designer, composer" 
        play="https://vidsneezes.itch.io/lost-at-birth"
        b_color='#e87c11'/>
      
       <GameWidget 
        image = {ParaCaffiene}
        title="Para-Caffiene" 
        description="My Nanoreno 2017 entry made with my friend Dennis. Sometimes getting coffee can go very wrong! But will our hero manage to get his coffee or be drowned by social anxiety?!?!" 
        role="writer, composer, artist" 
        play="https://vidsneezes.itch.io/para-caffiene"
        b_color='#e87c11'/>
      </div>
        
    );
  }
}

export default GamesPage;