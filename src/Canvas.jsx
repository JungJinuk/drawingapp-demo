import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import Pencil from './Pencil';

class Canvas extends Component {
  constructor(props) {
    super(props);

    let tool = null;
    
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.getCursorPosition = this.getCursorPosition.bind(this);
  }

  componentDidMount() {
    this.ctx = this.canvas.getContext("2d");
    this.tool = Pencil(this.ctx);
  }

  onMouseDown(e) {
    this.tool.onMouseDown(...this.getCursorPosition(e));
  }

  onMouseUp(e) {
    this.tool.onMouseUp(...this.getCursorPosition(e));
  }

  onMouseMove(e) {
    this.tool.onMouseMove(...this.getCursorPosition(e));
  }

  getCursorPosition(e) {
    const { top, left } = this.canvas.getBoundingClientRect();
    return [
      e.clientX - left,
      e.clientY - top
    ];
  }

  render() {
    const { width, height } = this.props;
    return (
      <canvas
        ref={(canvas) => { this.canvas = canvas; }}
        className="my-canvas"
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
        onMouseOut={this.onMouseUp}
        onMouseMove={this.onMouseMove}
        width={width}
        height={height} />
    );
  }
}

Canvas.propTypes = {
  width:PropTypes.number,
  height:PropTypes.number
};

export default Canvas;