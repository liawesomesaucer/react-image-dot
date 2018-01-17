import React from 'react';
import { render } from 'react-dom';

import ReactImageDot from './ReactImageDot';

import styles from './css/styles.css';

const App = () => (
  <div style={styles}>
    <h2>{'\u2728'}{'\u2728'}{'\u2728'}React Image Dot{'\u2728'}{'\u2728'}{'\u2728'}</h2>
    <ReactImageDot
      backgroundImageUrl='https://s3.us-west-1.amazonaws.com/thestratbook/dev-images/map.png'
      width={300}
      height={300}
    />
  </div>
);

render(<App />, document.getElementById('root'));
