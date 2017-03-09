import React, { Component, PropTypes } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 60
    };
  }

  tick() {
    if (this.state.seconds <= 0) {
      alert("시간초과!!");
      return;
    }

    this.setState((prevState) => ({
      seconds: prevState.seconds - 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  render() {
    return (
      <p className="my-timer">
        0 : {this.state.seconds}
      </p>
    );
  }
}

Timer.propTypes = {

};

export default Timer;