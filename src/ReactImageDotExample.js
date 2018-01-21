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
          backgroundImageUrl='https://raw.githubusercontent.com/liawesomesaucer/react-image-dot/master/public/images/map.png'
          width={480}
          height={480}
          dots={dots}
          deleteDot={this.deleteDot}
          addDot={this.addDot}
          dotRadius={6}
          dotStyles={{
            backgroundColor: 'red',
            boxShadow: '0 2px 4px gray',
          }} 
          backgroundSize={'cover'}
        />
        <button onClick={this.resetDots}>Reset</button>
        <DotsInfo
          height={480}
          width={480}
          dots={dots}
          deleteDot={this.deleteDot}
        />
      </div>
    );
  }
}
