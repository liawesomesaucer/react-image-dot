import React from 'react';
import PropTypes from 'prop-types';

import Dot from './components/Dot';

const propTypes = {
  // The max number of dots. Will replace in a LRU fashion
  maxDots: PropTypes.number, // TODO

  dotStyles: PropTypes.object,

  // The background color to use
  backgroundColor: PropTypes.string,

  // The background image url to use
  backgroundImageUrl: PropTypes.string,

  // Additional styles for container
  styles: PropTypes.object,

  // The width in pixels of the box. If unset, will be 100%
  width: PropTypes.number,

  // The width in pixels of height
  height: PropTypes.number,
};

const defaultProps = {};

export default class ReactImageDot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dots: [],
      grabbing: false,
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
      grabbing: false,
    });
  }

  moveDot = (index) => {
    this.setState({
      dots: this.state.dots.filter((e, i) => {
        return i !== index;
      }),
      grabbing: true,
    });
  }

  resetDots = () => {
    this.setState({
      dots: [],
    });
  }

  render() {
    const { dots, grabbing } = this.state;
    const { width, height, styles, dotStyles, backgroundColor, backgroundImageUrl } = this.props;
    const grabClass = grabbing ? 'grabbing' : '';

    return (
      <div className="container">
        <div
          className={`dot-wrapper ${grabClass}`}
          onMouseUp={this.onMouseUp}
          style={{
            ...styles,
            background: backgroundColor || `url('${backgroundImageUrl}') no-repeat center center`,
            width,
            height,
          }}
        >
          {dots.map((dot, i) =>
            <Dot
              x={dot.x}
              y={dot.y}
              i={i}
              styles={dotStyles}
              moveDot={this.moveDot}
            />
          )}
        </div>
        <button onClick={this.resetDots}>Reset</button>
      </div>
    );
  }
}

ReactImageDot.propTypes = propTypes;
ReactImageDot.defaultProps = defaultProps;
