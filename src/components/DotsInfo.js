import React from 'react';

export default function DotsInfo({ dots, height, width, deleteDot }) {
  return (
    <ul>
      {dots.map((dot, i) => {
        return (
          <li>
            <p>Dot {i} <button onClick={() => deleteDot(i)}>Remove</button></p>
            <p>Coordinates: x: {dot.x}, y: {dot.y}</p>
            <p>Decimal: 
                x: {(dot.x / width).toFixed(3)}, 
                y: {(dot.y / height).toFixed(3)}</p>
          </li>
        );
      })}
    </ul>
  );
}
