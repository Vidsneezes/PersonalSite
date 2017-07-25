import React, { Component } from 'react';
import './WelcomeInterface.css'

class WelcomeInterface extends Component {
  render() {
    return (
      <div className="WI-Head">
        <h1>Oscar Morales says...{this.props.page}</h1>
        <h3>Hello Visitor, Email me at moraleszez@gmail.com
         <a href="https://twitter.com/Moraleszez">@Moraleszez</a> {"   "}
        <a href="https://github.com/Vidsneezes">My Github</a></h3>
      </div>
    );
  }
}

export default WelcomeInterface;