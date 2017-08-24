import React, { Component } from 'react';
import './AboutMePage.css';

class AboutMePage extends Component {
  render() {
    return (
      <div className="AboutMe-Head">
      <div className="AboutMe-Inner">
      <h2>Hi I’m Oscar Morales an indie developer living in Guatemala!</h2>
       <h3>Programmer Extraordinaire</h3><h3> My main bread and butter is programming.</h3>

       <h4> Current creative endeavor is working on Ultra Zultra. Passion video game project.</h4>
      
        <h3>I enjoy learning new programming languages and have experience in:</h3>
        <ul>
          <li>C# - 7/10 dogs</li>
          <li>Java</li>
          <li>Javascript</li> 
          <li>Haxe</li>
        </ul>

        <a href = "https://github.com/Vidsneezes">Check out my Github</a>

        <h3>Tools wise I been using for more than 3 years in:</h3>

        <ul>
          <li>Unity3d</li>
          <li>Visual Studio</li>
          <li>Photoshop</li>
          <li>GraphicsGale</li>
        </ul>
          <div className="AboutMe-Footnote">
            <p>Learning is one of my hobbies, makes making games hard sometimes since I always want to apply new things I learn.
              it’s worth it at the end, be it something as simple as applying clean code, adding a super complex library, or adding new coding paradigms to different systems of my games.
            That’s me, if you need a tough as nails programmer contact me!</p>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMePage;


