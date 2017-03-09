import React, { Component } from 'react';
import Canvas from './Canvas';
import canvasStyle from './canvas.css';
import NavBar from './NavBar';
import Timer from './Timer';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Timer />
        <Canvas
          style={canvasStyle}
          width={800}
          height={500}
        />
      </div>
    );
  }
}

export default App;