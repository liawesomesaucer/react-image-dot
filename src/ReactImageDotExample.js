import React from 'react';

import ReactImageDot from './components/ReactImageDot';
import DotsInfo from './components/DotsInfo';

/**
 * Example component used to wrap React-Image-Dot. Since the dots are passed in
 * via props, you are free to handle the logic behind the dots as you see fit.
 */
export default class ReactImageDotExample extends React.Component {
  constructor(props) {
    super(props);

    this.initialDots = [{ x: 35, y: 32 }, { x: 96, y: 120 }];
    this.state = {
      dots: this.initialDots,
    };
  }

  addDot = (dot) => {
    this.setState({
      dots: [
        ...this.state.dots,
        dot,
      ],
    });
  }

  deleteDot = (index) => {
    this.setState({
      dots: this.state.dots.filter((e, i) => {
        return i !== index;
      }),
    });
  }

  resetDots = () => {
    this.setState({
      dots: this.initialDots,
    });
  }

  render() {
    const { dots } = this.state;

    return (
      <div>
        <ReactImageDot
          backgroundImageUrl='https://s3.us-west-1.amazonaws.com/thestratbook/dev-images/map.png'
          width={300}
          height={300}
          dots={dots}
          deleteDot={this.deleteDot}
          addDot={this.addDot}
        />
        <button onClick={this.resetDots}>Reset</button>
        <DotsInfo
          height={300}
          width={300}
          dots={dots}
          deleteDot={this.deleteDot}
        />
      </div>
    );
  }
}
