import React from 'react';
import { render } from 'react-dom';

import ReactImageDot from './ReactImageDot';

import styles from './css/styles.css';

const App = () => (
  <div style={styles}>
    <h2>{'\u2728'}{'\u2728'}{'\u2728'}React Image Dot{'\u2728'}{'\u2728'}{'\u2728'}</h2>
    <ReactImageDot />
  </div>
);

render(<App />, document.getElementById('root'));
