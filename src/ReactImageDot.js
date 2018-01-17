import React from 'react';

import Dot from './components/Dot';

export default class ReactImageDot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dots: [],
    };
  }

  onMouseUp = (e) => {
    const bounds = e.target.getBoundingClientRect();
    this.setState({
      dots: [
        ...this.state.dots,
        {
          x: e.pageX - bounds.left,
          y: e.pageY - bounds.top,
        },
      ],
    });
  }

  resetDots = () => {
    this.setState({
      dots: [],
    });
  }

  render() {
    const { dots } = this.state;

    return (
      <div className="container">
        <div
          className="dot-wrapper"
          onMouseUp={this.onMouseUp}
        >
          {dots.map(dot =>
            <Dot x={dot.x} y={dot.y} />
          )}
        </div>
        <button onClick={this.resetDots}>Reset</button>
      </div>
    );
  }
}
