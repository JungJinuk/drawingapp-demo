import React, { Component } from 'react';
import Canvas from './Canvas';
import canvasStyle from './canvas.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>React Canvas</h1>
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