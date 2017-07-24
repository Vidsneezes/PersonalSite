import React, { Component } from 'react';
import './GameWidget.css';



class GameWidget extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      hover: false
    };
  }


  clickMe(){
    console.log("clicked");
  }

  onMouseEnter(){

  }

  onMouseExit(){

  }

  render() {
    const divStyle = {
      background: this.props.b_color,
    };

    return (
      

      <div className="GameWidget-Head" onClick={this.clickMe} style={divStyle} onMouseEnter={this.onMouseEnter} onMouseExit={this.onMouseExit}>
        <div className="GameWidget-Left">
          <img src={this.props.image} className="GameWidget-Image" alt="logo" />
        </div>
        <div className="GameWidget-Right">
          <h1 className="GameWidget-Title">{this.props.title}</h1>
          <h4 className="GameWidget-Desc">{this.props.description}</h4>
          <p className="GameWidget-Role">Role: {this.props.role}</p>
        </div>
        <div className="GameWidget-Footer">
          <a className="GameWidget-Footer-Links" href={this.props.play}>Play Game!</a>
        </div>
      </div>
    );
  }
}

export default GameWidget;