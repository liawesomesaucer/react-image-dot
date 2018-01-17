import React from 'react';
import PropTypes from 'prop-types';

import Dot from './components/Dot';

const propTypes = {
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
      dots: this.props.initialDots,
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
      dots: this.props.initialDots,
    });
  }

  render() {
    const { dots, grabbing } = this.state;
    const { width, height, styles, dotStyles, backgroundColor, backgroundImageUrl } = this.props;
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
        </div>
        <button onClick={this.resetDots}>Reset</button>
      </div>
    );
  }
}

ReactImageDot.propTypes = propTypes;
ReactImageDot.defaultProps = defaultProps;
