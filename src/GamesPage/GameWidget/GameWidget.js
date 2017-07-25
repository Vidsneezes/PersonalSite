import React, { Component } from 'react';
import './GameWidget.css';



class GameWidget extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      hover: false
    };

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseExit = this.onMouseExit.bind(this);

  }


  clickMe(){
    console.log("clicked");
  }

  onMouseEnter(){
    this.setState({
      hover: true
    });
  }

  onMouseExit(){
    this.setState({
      hover: false
    });
  }

  render() {
    var divStyle = {
      background: this.props.b_color,
    };
    var imageLink = this.props.image;
    if(this.state.hover)
    {
      imageLink = this.props.imageAlt;
    }
    return (
      <div className="GameWidget-Head" style={divStyle} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseExit}>
        <div className="GameWidget-Left">
          <img src={imageLink} className="GameWidget-Image" alt="logo" />
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