import React, { Component } from 'react';
const moment = require('moment');

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: moment().format('LTS')
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      time: moment().format('LTS')
    });
  }

  render() {
    return (
      <div className="App-clock">
        <h2>{this.state.time}</h2>
      </div>
    );
  }
}

export default Clock;
