# React Image Dot

Allows you to draw dots on a background image. [Demo](https://2p5lzo7y20.codesandbox.io/)

## Usage

See [ReactImageDotExample](https://github.com/liawesomesaucer/react-image-dot/blob/master/src/ReactImageDotExample.js) 
as an example. Feel free to copy for your own needs.

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
