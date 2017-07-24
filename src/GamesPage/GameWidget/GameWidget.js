import React, { Component } from 'react';
import './GameWidget.css';

class GameWidget extends Component {

  clickMe(){
    console.log("clicked");
  }

  render() {
    return (
      <div className="GameWidget-Head" onClick={this.clickMe}>
        <div className="GameWidget-Left">
          <img src={this.props.image} className="GameWidget-Image" alt="logo" />
        </div>
        <div className="GameWidget-Right">
          <p>{this.props.title}</p>
          <p>{this.props.description}</p>
          <p>{this.props.role}</p>
        </div>
        <div className="GameWidget-Footer">
          <a className="GameWidget-Footer-Links" href={this.props.itch}>itch</a>
          <a className="GameWidget-Footer-Links" href={this.props.kong}>Kong</a>
          <a className="GameWidget-Footer-Links" href={this.props.google}>google</a>
        </div>
      </div>
    );
  }
}

export default GameWidget;