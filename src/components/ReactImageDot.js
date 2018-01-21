import React from 'react';
import PropTypes from 'prop-types';

import Dot from './Dot';

const propTypes = {
  // Required functions to handle parent-level state management
  deleteDot: PropTypes.func.isRequired,
  addDot: PropTypes.func.isRequired,

  resetDots: PropTypes.func,

  // CSS Styles for dots
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

  // To use pixel coordinates vs a scale from 0-1
  pixelCoordinates: PropTypes.bool,

  // Default dots
  initialDots: PropTypes.array,
};

const defaultProps = {
  pixelCoordinates: false,
  initialDots: [],
};

export default class ReactImageDot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grabbing: false,
    };
  }

  onMouseUp = (e) => {
    const bounds = e.target.getBoundingClientRect();
    this.setState({
      grabbing: false,
    });
    this.props.addDot({
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top,
    });
  }

  moveDot = (index) => {
    this.setState({
      grabbing: true,
    });
    this.props.deleteDot(index);
  }

  resetDots = () => {
    this.props.resetDots();
  }

  render() {
    const { grabbing } = this.state;

    const { dots, width, height, styles, dotStyles, backgroundColor, backgroundImageUrl } = this.props;
    const grabClass = grabbing ? 'react-image-dot__grabbing' : '';

    return (
      <div className="react-image-dot__container">
        <div
          className={`react-image-dot__wrapper ${grabClass}`}
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
          {this.props.resetDots &&
            <button onClick={this.resetDots}>Reset</button>
          }
        </div>
      </div>
    );
  }
}

ReactImageDot.propTypes = propTypes;
ReactImageDot.defaultProps = defaultProps;
