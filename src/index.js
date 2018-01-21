import React from 'react';
import { render } from 'react-dom';

import styles from './css/styles.css';

import ReactImageDotExample from './ReactImageDotExample';

const App = () => (
  <div style={styles}>
    <h2>{'\u2728'}{'\u2728'}{'\u2728'}React Image Dot{'\u2728'}{'\u2728'}{'\u2728'}</h2>
    <ReactImageDotExample />
  </div>
);

render(<App />, document.getElementById('root'));
