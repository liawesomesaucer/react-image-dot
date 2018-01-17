# React Image Dot

Allows you to draw dots on a background image

## Usage

```
<ReactImageDot
  backgroundImageUrl='https://s3.us-west-1.amazonaws.com/thestratbook/dev-images/map.png'
  width={300}
  height={300}
/>
```

## Options

* `dotStyles`: object - Additional CSS Styles for dots (overrides CSS)
* `backgroundColor`: string - Background color to use
* `backgroundImageUrl`: string - URL of background image to use
* `styles`: object - Additional CSS Styles for container (overrides CSS)
* `width`: number - The container's width
* `height`: number - The container's height
* `pixelCoordinates`: bool - To use pixel coordinates vs a scale from 0-1
* `initialDots`: array - The list of existing dots to start from or reset to

## Info

Coordinates are based the top left hand of the container.
