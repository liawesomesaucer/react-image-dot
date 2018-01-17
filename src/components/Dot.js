import React from 'react';

export default function Dot({ x, y }) {
  return (
    <div
      className="dot"
      style={{
        top: y,
        left: x
      }}
    />
  )
}
