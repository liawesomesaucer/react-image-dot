import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  i: PropTypes.number.isRequired,
  moveDot: PropTypes.func.isRequired,

  styles: PropTypes.object,
}

const defaultProps = {};

export default class Dot extends React.Component {
  onMouseDown = () => {
    this.props.moveDot(this.props.i);
  }

  render() {
    const { x, y, styles } = this.props;
    return (
      <div
        className="dot"
        onMouseDown={this.onMouseDown}
        style={{
          ...styles,
          top: y,
          left: x
        }}
      />
    );
  }
}

Dot.propTypes = propTypes;
Dot.defaultProps = defaultProps;
