# React Image Dot

Allows you to draw dots on a background image. [Demo](https://2p5lzo7y20.codesandbox.io/)

## Usage

See [ReactImageDotExample](https://github.com/liawesomesaucer/react-image-dot/blob/master/src/ReactImageDotExample.js) 
as an example. Feel free to copy for your own needs.
```
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
```

## Options

The functions `addDot` and `deleteDot` are required

* `resetDots`: func - when present, will render a button that calls a parent function
                to reset dots
* `dotStyles`: object - Additional CSS Styles for dots (overrides CSS)
* `dotRadius`: Number - The number in pixels to use for dot radius size
* `backgroundColor`: string - Background color to use
* `backgroundImageUrl`: string - URL of background image to use
* `styles`: object - Additional CSS Styles for container (overrides CSS)
* `backgroundSize`: string - the backgroundSize property in CSS. Default is 'cover'
* `width`: number - The container's width
* `height`: number - The container's height
* `pixelCoordinates`: bool - To use pixel coordinates vs a scale from 0-1
* `dots`: array - The dots, managed in parent-level (or redux) state

## Info

Coordinates are based the top left hand of the container.
